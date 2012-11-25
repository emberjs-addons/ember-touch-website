abort "Please use Ruby 1.9!" if RUBY_VERSION !~ /^1\.9/

require "bundler/setup"

def generate_docs
  print "Generating docs .. "

  Dir.chdir("app/submodules/sproutcore-touch/docs") do
    system("npm install") unless File.exist?('node_modules')
    system("./node_modules/.bin/yuidoc -q -t touch-theme")
  end
  
  rm_rf 'public/api'
  mkdir 'public/api'
  cp_r 'app/submodules/sproutcore-touch/docs/build/.', 'public/api'

end

desc "Generate API Docs"
task :generate_docs do
  generate_docs
end
