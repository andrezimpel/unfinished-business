set :application, 'website-name'
set :repo_url, 'git@github.com:user/repo.git'

# user
set :use_sudo, true

set :format, :pretty
set :log_level, :debug
set :pty, true
set :keep_releases, 2


# move the build to the shared dirs
# with that the blog won't go offline during a deployment
set :linked_dirs, [
  "public",
  "node_modules"
]


namespace :deploy do
  before :restart, :build_public do
    on roles(:app) do
      within release_path do
        execute "cd #{deploy_to}/shared && rm -rf node_modules && mkdir node_modules && cd ../current && npm install && ENV=#{fetch(:stage)} npx gatsby build"
      end
    end
  end

  after :publishing, :restart
end
