require 'capybara/rspec'
require 'capybara/dsl'
require 'capybara-screenshot/rspec'

Capybara.asset_host = 'http://localhost:3333'
Capybara.register_driver :selenium do |app|
  browser_options = ::Selenium::WebDriver::Firefox::Options.new()
  browser_options.args << '--headless'

  Capybara::Selenium::Driver.new(
    app,
    browser: :firefox,
    options: browser_options
  )
end

Capybara.default_driver = :selenium
