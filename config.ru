require 'bundler/setup'
require 'rake-pipeline'
require 'rake-pipeline/middleware'

class NoCache
  def initialize(app)
    @app = app
  end

  def call(env)
    @app.call(env).tap do |status, headers, body|
      headers["Cache-Control"] = "no-store"
    end
  end
end

use NoCache
use Rake::Pipeline::Middleware, Rake::Pipeline::Project.new("Assetfile")


use Rack::Static, 
  :urls => ["source", "api"],
  :root => "public"

@root = File.expand_path(File.dirname(__FILE__)) + "/public"

run Proc.new { |env|

  path = Rack::Utils.unescape(env['PATH_INFO'])
  index_file = @root + "#{path}/index.html"

  if File.exists?(index_file)
    [200, {'Content-Type' => 'text/html'}, File.open(index_file, File::RDONLY) ]
  else
    Rack::Directory.new(@root).call(env)
  end
}
