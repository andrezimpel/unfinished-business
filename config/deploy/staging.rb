set :stage, 'staging'

# branch
set :branch, 'master'

server '62.113.231.106', user: 'web-user', port: 22, roles: %w{web app}
set :deploy_to, '/var/www/share/folder/htdocs'
