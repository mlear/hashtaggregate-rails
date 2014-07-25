web: bundle exec rails server -p $PORT
redis: redis-server
backlog: bundle exec sidekiq -r./config/environment.rb
stream: bundle exec rake stream:start
