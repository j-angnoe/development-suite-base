module.exports = {
	'Test nginx'(browser) {
 		browser
      		.url('http://localhost:7100')
  			.waitForElementVisible('body', 500)
      		.assert.title('Welcome to nginx!')
      		.saveScreenshot('./stuff/screenshots/nginx.png')

      		.url('http://localhost:7125')
      		.waitForElementVisible('body', 500)
      		.assert.title('MailHog')
      		.saveScreenshot('./stuff/screenshots/mailhog.png')
      		
  			.end();
	}
}