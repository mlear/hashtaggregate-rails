class Backlog
  include Sidekiq::Worker

  def perform(tweet, original_tweet_params)
    Tweet.create(tweet)
    update_stars(original_tweet_params) if original_tweet_params["id"]
  end

  def update_stars(original_tweet_params)
  	if Tweet.find_by_twitter_id(original_tweet_params["id"])
  		db_tweet = Tweet.find_by_twitter_id(original_tweet_params["id"])
  		p "DB TWEET ID: #{db_tweet.id} ================================"
      p "original_tweet: #{original_tweet_params.inspect}"
      # db_tweet.update_attribute('stars', original_tweet_params["stars"])
      p db_tweet

      db_tweet.stars = original_tweet_params['stars']
  		p "ZOMG it saved? #{db_tweet.save}"
  	end
  end

end


