module ApplicationHelper
  def prepare(tweets)
    tweets_hash = {}
    tweets.each do |tweet|
      p "#{tweet.latitude}, #{tweet.longitude}"
      next if tweet.latitude == nil || tweet.longitude == nil
      tweets_hash["#{tweet.id - 1}"] = {
        content: tweet.content,
        username: tweet.username,
        latitude: tweet.latitude,
        longitude: tweet.longitude
      }
    end
    tweets_hash["length"] = tweets.length
    tweets_hash
  end
end
