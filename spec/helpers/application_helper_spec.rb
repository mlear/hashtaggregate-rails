require 'rails_helper'


describe ApplicationHelper do

    let(:tweet) { create :tweet }
    let(:tweets) {[tweet, tweet]}
    let(:tweet_hash) {prepare(tweets)}

  it 'should create 1 hash object' do
    expect(tweet_hash.length).to eq 2
  end

  it 'should be able to call the content' do
    puts tweet_hash
    expect(tweet_hash["1"][:content]).to eq('tweet tweet said the bobolink')
  end

  it 'should call the username' do
    expect(tweet_hash["2"][:username]).to eq('twitter_user')
  end

  it 'should call the latitude' do
    expect(tweet_hash["3"][:latitude]).to eq(1.0)
  end

  it 'should call the longitude' do
    expect(tweet_hash["4"][:longitude]).to eq(1.0)
  end

end
