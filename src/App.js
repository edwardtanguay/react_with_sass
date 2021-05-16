import './App.scss';

function App() {
	return (
		<div className="App">
			<main>
				<h1>Web Browsers</h1>
				<article class="browser">
					<h2>Firefox</h2>
					<p>Firefox is an open-source web browser developed by Mozilla, released in <span class="year">2002</span>.
				It uses the <strong>Gecko</strong> browser
				rendering engine and the <strong>SpiderMonkey</strong> JavaScript rendering engine.</p>
				</article>
				<article class="browser">
					<h2>Safari</h2>
					<p>Safari is a web browser developed by Apple, released in <span class="year">2003</span>. It uses the
				<strong>WebKit</strong> browser
				rendering engine and the <strong>JavaScriptCore</strong> rendering engine.
			</p>
				</article>
				<article class="browser">
					<h2>Chrome</h2>
					<p>Chrome is a web browser developed by Google, released in <span class="year">2008</span>. It uses the
				<strong>Blink</strong> rendering
				engine and the <strong>V8</strong> JavaScript rendering engine.
			</p>
				</article>
			</main>
		</div>
	);
}

export default App;
