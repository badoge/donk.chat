<script>
	import '../app.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>



<div class="navbar bg-success text-primary-content">
	<div class="navbar-start">

	</div>
	<div class="navbar-center">
	  <a class="btn btn-ghost text-xl" href="/">
		<img src="/donk.png" alt="donk.chat" style="height: 2rem">
		donk.chat</a>
	</div>
	<div class="navbar-end">


	</div>
  </div>

{@render children?.()}