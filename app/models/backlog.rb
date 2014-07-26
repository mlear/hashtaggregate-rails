class Backlog
  include Sidekiq::Worker

  def perform(tweet)
    Tweet.create(tweet)
  end

  # def create_tweet(tweet)
    # Tweet.create(tweet)
  # end
end
