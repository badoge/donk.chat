<script>
	import '../app.css';
</script>

<div class="navbar bg-base-100 bg-success text-primary-content">
	<div class="flex-1">
	  <a class="btn btn-ghost text-xl" href="/">donk.chat</a>
	</div>
	<div class="flex-none">
	  <ul class="menu menu-horizontal px-1">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/room">Room</a></li>
	  </ul>
	</div>
  </div>

<slot />