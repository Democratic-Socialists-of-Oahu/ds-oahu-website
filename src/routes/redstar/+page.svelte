<script lang="ts">
	import Card from '$lib/Card.svelte';

	const newsItems = [
		{
			href: 'https://www.hawaiinewsnow.com/2025/05/20/activists-surprised-after-army-willing-let-go-makua-state-land-lease-2029/',
			content:
				'The US Army stated in their final environmental impact statement that they are willing to allow their lease of the 782 acres in front of Mākua Valley to expire in 2029. Activists vow to hold the military to its responsibility to clean up unexploded ordinance from live fire training.',
			source: 'Hawaii News Now'
		},
		{
			href: 'https://www.hawaii.edu/news/2025/05/14/hawaii-housing-factbook-2025/',
			content:
				'UHERO housing report found that less than 25% of households can afford a single-family home, with an average cost of $950,000. Condo prices have dropped because of soaring home insurance rates. Meanwhile, out-of-state buyers made up 20% of single-family and 31% of condo purchases.',
			source: 'UH News'
		},
		{
			href: 'https://www.civilbeat.org/2025/05/honolulu-pays-2-1-million-end-wrongful-arrest-lawsuit/',
			content:
				'Honolulu City Council agreed to pay $2.1 million of taxpayer dollars to settle a wrongful arrest lawsuit. Despite not being found with any drugs or money, the man was imprisoned for 2 years and ended up homeless after he was forced to sell his tools to pay for legal fees.',
			source: 'Civil Beat'
		},
		{
			href: 'https://www.hawaiinewsnow.com/2025/05/22/aclu-hawaii-prepares-sue-hpd-over-concerning-trend-sober-drivers-arrested-dui/',
			content:
				'ACLU Hawaiʻi is threatening to sue HPD for a “pattern and practice of falsely arresting drivers in Honolulu without probable cause and without due process.” A HNN Investigates found 69 drivers were taken to jail for drunk driving despite a breath or blood test of 0.00. Even if not prosecuted, a DUI arrest can affect employment status.',
			source: 'Hawaii News Now'
		},
		{
			href: 'https://mainichi.jp/english/articles/20250527/p2g/00m/0na/002000c',
			content:
				'Two US Marines were arrested in Okinawa in separate DUI cases, including a hit-and-run that injured a family of four including two children.',
			source: 'Mainichi'
		},
		{
			href: 'https://www.aljazeera.com/news/2025/5/26/israel-kills-dozens-overnight-bombed-people-as-they-slept-in-school',
			content:
				'Israel has killed more than 50 people since Monday, including 36 at Fahmi al-Jarjawi School as Israel continues blocking food, medical supplies, and other aid from entering Gaza. The majority of the casualties from the attack were women and children.',
			source: 'Al Jazeera'
		}
	];
</script>

<div class="mb-4 flex w-full justify-center content-center justify-self-center bg-[#f9f3c6] py-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="red"
		viewBox="0 0 260 245"
		class="mr-1 h-14 md:mr-2 md:h-16"
	>
		<path d="m56,237 74-228 74,228L10,96h240" />
	</svg>
	<div>
		<div class="font-serif text-3xl italic md:text-4xl">The Red Star Advertiser</div>
		<div class="text-right text-base md:text-lg">Issue 3, May 29, 2025</div>
	</div>
</div>

<div class="text-left indent-12">In the News...</div>

<div
	class="
    grid
    grid-cols-1
    items-start
    justify-items-center

    md:grid-cols-2

    lg:grid-cols-3
"
>
	{#each newsItems as newsItem}
		<Card {newsItem} />
	{/each}
</div>

<div class="justify-self-center my-4 font-bold text-white py-2 bg-[#872D23] w-full max-w-[75%]">This Week’s Editorial</div>

<div class="justify-self-center w-full max-w-[75%] mb-8">
	<div class="my-4 px-6 text-left indent-8 text-base">
		The University of Hawaiʻi Economic Research Organization (UHERO) has released their Hawaii
		Housing Factbook for 2025. The report begins with the statement that “Hawaii remains in a severe
		housing crisis” and goes on to paint a depressing picture of the state of affairs: “highest home
		prices in the nation […] nations highest homelessness rate […] fewer than one-in-four households
		could afford a mortgage on the median home,” and more. The problem and the solution UHERO offers
		can be summed up by this single sentence: “The success of housing policies depends most on their
		ability to increase the housing supply.” This analysis makes sense when you live within the
		bounds of a capitalist system.
	</div>

	<div class="my-4 px-6 text-left indent-8 text-base">
		The state of housing that UHERO describes is not a list of the failures of the property market,
		but actually its successes. The median property value is close to $1,000,000. Housing is a
		commodity and its value is HIGH. Anyone who owns a home outright is part of a marketplace where
		the value of what you own is ensured to go up. This market builds an economy of landlords,
		developers, property managers, real estate agents and more. The developers want to build more
		houses cheaply, the landlords want to raise the rent and buy more property, the property
		managers want to lower costs (neglect maintenance) and increase their portfolio (more
		properties), and the real estate agents want whatever keeps this market open to trade. What they
		all need is a population of people desperate for that commodity: shelter, and not enough of it
		for everyone. And that my friends are YOU, the people who have no control over their housing.
	</div>

	<div class="my-4 px-6 text-left indent-8 text-base">
		Marketplace renters, public housing residents, houseless folks on the street, YOU have always
		been in crisis from the moment a roof over your head was not a right but an item to be bought
		and sold. The state of housing that UHERO describes is a state of affairs for people who wish to
		one day buy a house, but they still want to keep YOU poor and desperate. The solutions thus, are
		a patchwork: developers advocate building more public housing, while getting rid of short term
		rentals and taxing vacant units only hurts a small fraction of real estate profiteers. Do this
		and what? YOU still scrounge for pennies and pay dollars to stay alive?
	</div>

	<div class="my-4 px-6 text-left indent-8 text-base">
		True solutions exist outside the marketplace. Rent is a lie, financing the ruling class along
		with your labor. All of YOU are what keeps this system running. And all of YOU together can
		change it. What is needed is to change the conversation entirely. To center the needs of regular
		working class people. And that will only happen when YOU organize. The Honolulu Tenant Union
		exists as a structure to organize those who do not own or control their housing. When there is a
		majority of US together and strong, we can knock down this system with the simple truth that
		housing is a right!
	</div>

	<div class="my-4 pl-12 text-right text-base">- Tenant Union Member</div>
</div>

<div class="justify-self-center mt-4 font-bold text-white py-2 bg-[#872D23] w-full max-w-[75%]">Upcoming Events</div>

<table class="border-collapse border-spacing-4 justify-self-center text-base">
	<tbody>
		<tr>
			<td class="justify-self-end border-y py-4 pr-4 text-right">
				<div>Every Sunday</div>
				<div>5 pm @</div>
				<div>Thomas Square</div>
			</td>
			<td class="justify-self-start border-y py-4 pl-4 text-left">
				<div>Food Not Bombs [FNB]</div>
				<div>Potluck, Mutual Aid, Community Meeting</div>
			</td>
		</tr>
		<tr>
			<td class="justify-self-end border-y py-4 pr-4 text-right">
				<div>Every Sunday</div>
				<div>6 pm @</div>
				<div>Kapiolani Community Park</div>
			</td>
			<td class="justify-self-start border-y py-4 pl-4 text-left">
				<div>Hawaiʻi for Palestine [H4P]</div>
				<div>Under the Olive Tree Community Gathering</div>
			</td>
		</tr>
		<tr>
			<td class="justify-self-end border-y py-4 pr-4 text-right">
				<div>Saturday, May 31</div>
				<div>9:30 am by registration</div>
			</td>
			<td class="justify-self-start border-y py-4 pl-4 text-left">
				<div>Nation of Hawaiʻi</div>
				<div>Puʻuhonua o Waimānalo</div>
				<div>ʻĀina Workday</div>
			</td>
		</tr>
		<tr>
			<td class="justify-self-end border-y py-4 pr-4 text-right">
				<div>Sunday, June 1</div>
				<div>1 pm @</div>
				<div>Old Stadium Park</div>
			</td>
			<td class="justify-self-start border-y py-4 pl-4 text-left">
				<div>Honolulu Tenants Union [HoTU]</div>
				<div>Mōʻiliʻili Potluck</div>
				<div>and Community Meeting</div>
			</td>
		</tr>
		<tr>
			<td class="justify-self-end border-y py-4 pr-4 text-right">
				<div>Sunday, June 8</div>
				<div>3 pm @</div>
				<div>Unite Here! Local 5</div>
				<div>1516 King St</div>
			</td>
			<td class="justify-self-start border-y py-4 pl-4 text-left">
				<div>Democratic Socialists of Oʻahu [DSO]</div>
				<div>Monthly Meeting</div>
			</td>
		</tr>
	</tbody>
</table>

<div class="flex w-full justify-center content-center justify-self-center bg-[#f9f3c6] py-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="red"
		viewBox="0 0 260 245"
		class="mr-1 h-14 md:mr-2 md:h-16"
	>
		<path d="m56,237 74-228 74,228L10,96h240" />
	</svg>
	<div>
		<div class="font-serif text-3xl italic md:text-4xl">The Red Star Advertiser</div>
		<div class="text-right text-base md:text-lg">Issue 3, May 29, 2025</div>
	</div>
</div>
<div class="text-right text-sm w-full max-w-[75%]">a Democratic Socialists of O‘ahu publication</div>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSdoKrcmKykCo3PBA3Ya95dypEVdjZlIKwOkb91UbrTxgDelfQ/viewform" target="_blank" class="flex my-4 italic justify-self-center items-center hover:opacity-65">
<div class="">Subscribe to </div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="red"
		viewBox="0 0 260 245"
		class="h-7 ml-2 mr-1"
	>
		<path d="m56,237 74-228 74,228L10,96h240" />
	</svg>
<div class="font-serif">The Red Star Advertiser!</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="ms-2 h-5 rtl:rotate-180"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
				/>
			</svg>
</a>