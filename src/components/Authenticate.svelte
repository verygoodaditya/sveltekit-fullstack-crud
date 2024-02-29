<script>
	import { authHandlers } from '../store/store';

	let email = '';
	let password = '';
	let confirmPass = '';
	let error = false;
	let register = false;
	let authenticating = false;

	async function handleAuthenticate() {
		if (authenticating) {
			return;
		}
		if (!email || !password || (register && !confirmPass)) {
			error = true;
			return;
		}
		authenticating = true;

		try {
			if (!register) {
				await authHandlers.login(email, password);
			} else {
				await authHandlers.signup(email, password);
			}
		} catch (err) {
			console.log('There was an auth error', err);
			error = true;
			authenticating = false;
		}
	}

	function handleRegister() {
		register = !register;
	}
</script>

<div class="authContainer">
	<form>
		<h1>{register ? 'Register' : 'Login'}</h1>
		{#if error}
			<p class="error">The information you have entered is not correct</p>
		{/if}
		<label>
			<p class={email ? ' above' : ' center'}>Email</p>
			<input bind:value={email} type="email" placeholder="Email" />
		</label>
		<label>
			<p class={password ? ' above' : ' center'}>Password</p>
			<input bind:value={password} type="password" placeholder="Password" />
		</label>
		{#if register}
			<label>
				<p class={confirmPass ? ' above' : ' center'}>Confirm Password</p>
				<input bind:value={confirmPass} type="password" placeholder="Confirm Password" />
			</label>
		{/if}

		<button on:click={handleAuthenticate} type="button" class="submitBtn">
			{#if authenticating}
				<i class="fa-solid fa-spinner loadingSpinner" />
			{:else}
				Submit
			{/if}
		</button>
	</form>
	<div class="options">
		<p>Or</p>
		{#if register}
			<div>
				<p>Already have an account?</p>
				<p on:click={handleRegister} on:keydown={() => {}}>Login</p>
			</div>
		{:else}
			<div>
				<p>Don't have an account?</p>
				<p on:click={handleRegister} on:keydown={() => {}}>Register</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.authContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 24px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	form,
	.options {
		width: 400px;
		max-width: 100%;
		margin: 0 auto;
	}

	form input {
		width: 100%;
	}

	h1 {
		text-align: center;
		background: linear-gradient(to right, #a6f5ff, #9b9b9b);
		background-clip: text;
		-webkit-background-clip: text; /* For compatibility with some browsers */
		color: transparent;
		font-size: 3rem;
	}

	form label {
		position: relative;
		border: 2px solid transparent;
		border-image: linear-gradient(to right, #b3b3b3, #545050) 1;
	}
	form input {
		border: none;
		background: transparent;
		color: white;
		padding: 14px;
		border-radius: 4px;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	form input:focus {
		border: none;
		outline: none;
		border-radius: 3px;
	}

	form label:focus-within {
		border-color: blue;
	}

	form button {
		background: rgb(145, 164, 167);
		color: rgb(56, 55, 55);
		border: none;
		padding: 14px 0;
		border-radius: 4px;
		cursor: pointer;
		transition:
			background 0.3s ease-in-out,
			color 0.3s ease-in-out;

		margin: 0 60px;
		font-size: 1rem;
		font-weight: 700;
		display: grid;
		place-items: center;
	}

	form button:hover {
		background: rgb(0, 129, 169);
		color: rgb(215, 215, 215);
	}

	.above,
	.center {
		position: absolute;
		transform: translateY(-50%);
		pointer-events: none;
		color: rgb(230, 229, 229);
		border-radius: 4px;
		padding: 0 6px;
		font-size: 0.8rem;
	}

	.above {
		top: 0;
		left: 24px;
		background: rgb(67, 80, 86);
		border: 1px solid rgb(0, 0, 0);
		font-size: 0.7rem;
	}

	.center {
		top: 50%;
		left: 6px;
		border: 1px solid transparent;
		opacity: 0;
	}

	.error {
		color: rgb(247, 169, 169);
		font-size: 0.8rem;
		text-align: center;
		font-family: 'Poppins', sans-serif;
		font-weight: 300;
	}

	.options {
		padding: 14px 0;
		overflow: hidden;
		font-size: 0.9rem;
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-family: 'Poppins', sans-serif;
	}

	.options > p {
		position: relative;
		text-align: center;
		width: fit-content;
		margin: 0 auto;
		padding: 0 8px;
	}

	.options > p::after,
	.options > p::before {
		position: absolute;
		content: '';
		top: 50%;
		transform: translateY(-50%);
		width: 100vw;
		height: 1.5px;
		background: white;
	}

	.options > p::after {
		right: 100%;
	}

	.options > p::before {
		left: 100%;
	}
	.options div {
		display: flex;
		align-items: center;
		gap: 20px;
		justify-content: center;
	}

	.options div p:last-of-type {
		color: rgb(194, 255, 255);
		cursor: pointer;
		transition: color 0.1s ease-in-out;
	}

	.options div p:last-of-type:hover {
		color: rgb(117, 153, 164);
	}

	.spin {
		animation: spin 2s infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
