module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "./stuff/test-reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./stuff/bin/selenium-server-standalone-3.9.1.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./node_modules/.bin/chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost:7100",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : true,
        "path" : "./stuff/screenshots/"
      },
      "desiredCapabilities": {
          "browserName" : "chrome",
          "javascriptEnabled" : true,
          "acceptSslCerts" : true,
          "_chromeOptions" : {
            "args" : getChromeOptions()
          },
          "resolution": "1440x3000"        
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}

function getChromeOptions() {
  var args = ["no-sandbox", "disable-gpu", "headless"];

  /* @todo - by running nightwatch like this: BROWSER=yes nightwatcb ..  one should be able to run non-headless *
  
  */
  return args;
}