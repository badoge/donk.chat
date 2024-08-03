<script>
	import '../app.css';
	import TypcnPlus from '~icons/typcn/plus';
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

		<button class="btn btn-primary text-xl"><TypcnPlus  />New chat room</button>

	</div>
  </div>

<slot />