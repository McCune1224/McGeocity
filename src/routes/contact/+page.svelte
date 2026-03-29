<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";

	interface FormData {
		name: string;
		email: string;
		subject: string;
		message: string;
	}

	interface FormErrors {
		name?: string;
		email?: string;
		subject?: string;
		message?: string;
	}

	let formData: FormData = $state({
		name: "",
		email: "",
		subject: "",
		message: ""
	});

	let errors: FormErrors = $state({});
	let isSubmitting = $state(false);
	let isSuccess = $state(false);

	const contactMethods = [
		{ label: "EMAIL", value: "alexmccune1224@gmail.com", href: "mailto:alexmccune1224@gmail.com" },
		{ label: "LINKEDIN", value: "linkedin.com/in/mccune1224", href: "https://linkedin.com/in/mccune1224" },
		{ label: "LOCATION", value: "Rochester, NY", href: null }
	];

	function validateForm(): boolean {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "NAME IS REQUIRED";
		}

		if (!formData.email.trim()) {
			newErrors.email = "EMAIL IS REQUIRED";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "INVALID EMAIL FORMAT";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "SUBJECT IS REQUIRED";
		}

		if (!formData.message.trim()) {
			newErrors.message = "MESSAGE IS REQUIRED";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "MESSAGE MUST BE AT LEAST 10 CHARACTERS";
		}

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		isSuccess = false;

		if (!validateForm()) {
			return;
		}

		isSubmitting = true;

		// Simulate form submission (client-side only for now)
		setTimeout(() => {
			isSubmitting = false;
			isSuccess = true;
			formData = { name: "", email: "", subject: "", message: "" };
			errors = {};
		}, 1000);
	}

	function clearError(field: keyof FormErrors) {
		if (errors[field]) {
			errors = { ...errors, [field]: undefined };
		}
	}
</script>

<svelte:head>
	<title>Contact | Alex McCune - Healthcare IT Security Specialist</title>
	<meta name="description" content="Get in touch with Alex McCune, Healthcare IT Infrastructure Specialist. Contact via email, LinkedIn, or the contact form for cybersecurity and infrastructure opportunities." />
	<meta name="keywords" content="Alex McCune contact, cybersecurity professional, hire security specialist, Rochester NY IT, infrastructure security consultant" />
	
	<!-- Open Graph -->
	<meta property="og:title" content="Contact | Alex McCune - Healthcare IT Security Specialist" />
	<meta property="og:description" content="Get in touch with Alex McCune, Healthcare IT Infrastructure Specialist." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://alexmccune.dev/contact" />
	<meta property="og:site_name" content="Alex McCune Portfolio" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Contact | Alex McCune" />
	<meta name="twitter:description" content="Get in touch with Alex McCune, Healthcare IT Infrastructure Specialist." />
	
	<!-- Canonical -->
	<link rel="canonical" href="https://alexmccune.dev/contact" />
</svelte:head>

<div class="contact-page">
	<!-- Header Panel -->
	<IndustrialPanel title="CONTACT">
		<p class="intro-text">
			Have a project in mind or want to connect? Send a message using the form below
			or reach out through one of the alternative contact methods.
		</p>
	</IndustrialPanel>

	<IndustrialDivider />

	<div class="contact-layout">
		<!-- Contact Form -->
		<div class="form-section">
			<IndustrialPanel title="SEND MESSAGE">
				{#if isSuccess}
					<div class="success-message" role="alert">
						<div class="success-icon">[ OK ]</div>
						<div class="success-text">
							<strong>MESSAGE TRANSMITTED</strong>
							<p>Thank you for your message. I'll get back to you soon.</p>
						</div>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="contact-form" novalidate>
						<div class="form-group">
							<label for="name" class="form-label">
								NAME <span class="required">*</span>
							</label>
							<input
								type="text"
								id="name"
								name="name"
								class="form-input {errors.name ? 'has-error' : ''}"
								placeholder="Enter your name"
								autocomplete="name"
								bind:value={formData.name}
								oninput={() => clearError("name")}
							/>
							{#if errors.name}
								<span class="error-message" role="alert">{errors.name}</span>
							{/if}
						</div>

						<div class="form-group">
							<label for="email" class="form-label">
								EMAIL <span class="required">*</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								class="form-input {errors.email ? 'has-error' : ''}"
								placeholder="Enter your email"
								autocomplete="email"
								bind:value={formData.email}
								oninput={() => clearError("email")}
							/>
							{#if errors.email}
								<span class="error-message" role="alert">{errors.email}</span>
							{/if}
						</div>

						<div class="form-group">
							<label for="subject" class="form-label">
								SUBJECT <span class="required">*</span>
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								class="form-input {errors.subject ? 'has-error' : ''}"
								placeholder="Enter subject"
								autocomplete="off"
								bind:value={formData.subject}
								oninput={() => clearError("subject")}
							/>
							{#if errors.subject}
								<span class="error-message" role="alert">{errors.subject}</span>
							{/if}
						</div>

						<div class="form-group">
							<label for="message" class="form-label">
								MESSAGE <span class="required">*</span>
							</label>
							<textarea
								id="message"
								name="message"
								class="form-textarea {errors.message ? 'has-error' : ''}"
								placeholder="Enter your message (minimum 10 characters)"
								rows="6"
								bind:value={formData.message}
								oninput={() => clearError("message")}
							></textarea>
							{#if errors.message}
								<span class="error-message" role="alert">{errors.message}</span>
							{/if}
						</div>

						<div class="form-actions">
							<IndustrialButton
								label={isSubmitting ? "TRANSMITTING..." : "[ SEND MESSAGE ]"}
								type="submit"
								disabled={isSubmitting}
							/>
						</div>
					</form>
				{/if}
			</IndustrialPanel>
		</div>

		<!-- Alternative Contact Methods -->
		<div class="contact-info-section">
			<IndustrialPanel title="ALTERNATIVE CONTACTS">
				<div class="contact-methods">
					{#each contactMethods as method}
						<div class="contact-method">
							<span class="method-label">{method.label}</span>
							{#if method.href}
								<a href={method.href} class="method-value" target={method.href.startsWith("http") ? "_blank" : undefined} rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}>
									{method.value}
								</a>
							{:else}
								<span class="method-value static">{method.value}</span>
							{/if}
						</div>
					{/each}
				</div>
			</IndustrialPanel>
		</div>
	</div>
</div>

<style lang="scss">
	.contact-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.intro-text {
		color: #c9c9c9;
		line-height: 1.6;
		margin: 0;
	}

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0;

		@media (min-width: 1024px) {
			grid-template-columns: 1.5fr 1fr;
		}
	}

	.form-section {
		min-width: 0;
	}

	.contact-info-section {
		min-width: 0;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.form-label {
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 0.8125rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #888888;

		.required {
			color: #aa5555;
		}
	}

	.form-input,
	.form-textarea {
		width: 100%;
		padding: 0.75rem 1rem;
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 0.9375rem;
		color: #c9c9c9;
		background: #252525;
		border: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
		transition: border-color 0.15s ease, box-shadow 0.15s ease;

		&::placeholder {
			color: #666666;
		}

		&:focus {
			outline: none;
			border-color: #8b9a5b #5a6a3b #5a6a3b #8b9a5b;
			box-shadow: inset 0 0 0 1px rgba(139, 154, 91, 0.2);
		}

		&.has-error {
			border-color: #aa5555 #884444 #884444 #aa5555;
			background: #2a2020;
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}

	.form-textarea {
		resize: vertical;
		min-height: 120px;
		line-height: 1.5;
	}

	.error-message {
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 0.8125rem;
		color: #aa5555;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		animation: industrial-fade-in 0.2s ease-out;
	}

	.form-actions {
		margin-top: 0.5rem;
	}

	.success-message {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.25rem;
		background: #252525;
		border: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
		animation: industrial-fade-in 0.3s ease-out;
	}

	.success-icon {
		font-family: var(--font-mono, "Courier New", monospace);
		font-weight: bold;
		font-size: 0.875rem;
		color: #8b9a5b;
		white-space: nowrap;
	}

	.success-text {
		font-family: var(--font-mono, "Courier New", monospace);

		strong {
			display: block;
			color: #8b9a5b;
			font-size: 0.9375rem;
			margin-bottom: 0.25rem;
		}

		p {
			color: #888888;
			font-size: 0.875rem;
			margin: 0;
		}
	}

	.contact-methods {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contact-method {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.875rem;
		background: #252525;
		border: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
	}

	.method-label {
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 0.8125rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #888888;
	}

	.method-value {
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 0.875rem;
		color: #c9c9c9;
		text-decoration: none;
		word-break: break-all;

		&:hover {
			color: #8b9a5b;
			text-decoration: underline;
		}

		&.static {
			color: #c9c9c9;
			cursor: default;

			&:hover {
				color: #c9c9c9;
				text-decoration: none;
			}
		}
	}

	@keyframes industrial-fade-in {
		0% {
			opacity: 0;
			transform: translateY(-4px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 640px) {
		.contact-form {
			gap: 1rem;
		}

		.form-input,
		.form-textarea {
			padding: 0.625rem 0.875rem;
			font-size: 0.875rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.error-message,
		.success-message {
			animation: none;
		}
	}
</style>
