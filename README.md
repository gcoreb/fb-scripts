Just some Facebook scripts you can run in Chrome.
<br/>
<h1>Setup</h1>
Go to Facebook and open the messages tab (on the left). Open the <a href='https://developer.chrome.com/devtools/docs/console'>dev console</a>.
<h1>Send to most recent</h1>
To get the boxID, right click the reply button and find what the id is equal to. 
<br/>
<h3>Ex:</h3>
<code>
< input value="Reply" type="submit" id="u_jsonp_12_6" class="_5f0v" tabindex="">
</code>
<br/>
the id would be u_jsonp_12_6.

Customize the # of people with <code> i< #people </code>.

Finally, set <code> chatBox.value = 'your message'; </code>.

