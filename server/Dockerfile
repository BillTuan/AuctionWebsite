from ruby
run apt-get update -y
run apt-get install -y nodejs
run gem install rails
run mkdir webapp
ADD . /webapp
workdir /webapp
ADD Gemfile /webapp/Gemfile
ADD Gemfile.lock /webapp/Gemfile.lock
RUN bundle install