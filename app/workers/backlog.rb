class Backlog
  include Sidekiq::Worker

  def perform(tweet, original_tweet_params)
    Tweet.create(tweet)
    update_stars(original_tweet_params) if original_tweet_params["id"]
  end

  def update_stars(original_tweet_params)
  	if Tweet.find_by_twitter_id(original_tweet_params["id"])
  		db_tweet = Tweet.find_by_twitter_id(original_tweet_params["id"])
      db_tweet.stars = original_tweet_params['stars']
  		db_tweet.save
  	end
  end

end


