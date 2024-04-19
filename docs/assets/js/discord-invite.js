void (async function discordInvite() {
	const invite = document.querySelector(".discord-invite");
	const guildIcon = invite.querySelector("[data-icon]");
	const guildName = invite.querySelector("[data-name]");
	const guildPresence = invite.querySelector("[data-presence-count]");
	const guildMembers = invite.querySelector("[data-total-count]");

	const req = await fetch(
		"https://discord.com/api/v10/invites/xf8DEHqcKK?with_counts=true"
	);
	const json = await req.json();

	guildIcon.src = `https://cdn.discordapp.com/icons/${json.guild.id}/${json.guild.icon}.png`;
	guildName.textContent = json.guild.name;
	guildPresence.textContent = json.approximate_presence_count;
	guildMembers.textContent = json.approximate_member_count;

	invite.dataset.loading = false;
})();
