desc "starts the tweet reader stream"
task "stream:start" => :environment do
  puts 'starting stream...'
  include TwitterCredentialHelper
  set_up_client
  puts 'client set up...'
  TweetStream::Client.new.track("#SDCC") do |twitter_tweet|
    # next if twitter_tweet.text.include? 'RT'
    new_tweet = {
      username: twitter_tweet.user.screen_name,
      content: twitter_tweet.full_text,
      latitude: twitter_tweet.geo.coordinates[0],
      longitude: twitter_tweet.geo.coordinates[1],
      twitter_id: twitter_tweet.id,
      location: twitter_tweet.place.full_name
    }

    original_tweet_params = {}

    if twitter_tweet.retweeted_status
      original_tweet_params[:id] = twitter_tweet.retweeted_status.id.to_s
      original_tweet_params[:stars] = (twitter_tweet.retweeted_status.retweet_count + twitter_tweet.retweeted_status.favorite_count)
    end

    Backlog.perform_async(new_tweet, original_tweet_params)
    # p twitter_tweet.retweeted_status if twitter_tweet.retweeted_status
    # p twitter_tweet.text if twitter_tweet.is_a?(Twitter::Tweet) && twitter_tweet.geo.coordinates
  end
end
