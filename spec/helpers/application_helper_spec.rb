require 'rails_helper'


describe ApplicationHelper do

    tweet = Tweet.create!
    tweet.id = 1
    tweet.username = 'matt'
    tweet.content = 'testing tweets'
    tweet.latitude = 2334
    tweet.longitude = 6454

  it 'should create 1 hash object' do
    expect(prepare(tweet_creator).length).to eq 1
  end

  it 'should be able to call the content' do
    expect(prepare(tweet_creator).content).to eq 'testing tweets'
  end

  it 'should load content into json object' do

  end
end
