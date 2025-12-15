<script lang="ts">
	import type { PageProps } from './$types';

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let { data }: PageProps = $props();

	const date = new Date('2025-12-14T12:00:00');
	const title = 'The Real Deal About Union Plaza';
	const author = 'Cat Magtalas';
</script>

<div class="flex">
    <div class="content-center size-24 mb-4 mr-2 border border-4 bg-white">
        <p class="text-xs">{months[date.getMonth()].slice(0, 3)}. {date.getDate()} '{date.getFullYear().toString().slice(2)}</p>
    </div>
    <div class="mb-4 flex w-full items-center content-center justify-center justify-self-center bg-[#f9f3c6] py-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 260 245"
            class="mr-1 h-14 md:mr-2 md:h-16"
        >
            <path d="m56,237 74-228 74,228L10,96h240" />
        </svg>
        <div class="content-center pr-2 font-serif text-3xl italic md:text-4xl">The Red Star Advertiser</div>
    </div>
</div>

<div>
	<div class="font-bold">{title}</div>

	<div class="my-4 text-base">by <b>{author}</b> from <a href="https://hnltenantsunion.org/" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:visited:text-purple-800">Honolulu Tenants Union</a></div>
</div>

<div class="mb-4 space-y-4 w-full max-w-[100%] justify-self-center text-left text-base px-8 md:px-0 md:max-w-[75%]">
	<p class="indent-8">"Hell hole."</p>

	<p class="indent-8">These words have become synonymous with Union Plaza, whose tenants are embroiled in a bitter fight with Chad Waters, who has aptly earned the title "Slumlord of the Year" after over two months of engaging in increasingly cruel and illegal actions that have resulted in truly hellish living conditions for everyone residing in the building.</p>

	<p class="indent-8">After calling for tenants to vacate Union Plaza with only a 4-day notice (illegal under <a href="https://cca.hawaii.gov/ocp/files/2019/04/Landlord-Tenant-Code.pdf" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:visited:text-purple-800">HRS 521</a>, which is Hawai‘i's Residential Landlord-Tenant Code) at the end of September, Waters proceeded to shut off the building's power in retaliation against the tenants' resistance to this illegal practice. Then, he hired so-called "in-house management" led by a particular disgraced social media influencer to harass and intimidate tenants. Covered and masked, some of these hired men even assaulted several tenants, who suffered broken jaws, broken arms, and other injuries from being repeatedly maced, hit, and beaten. No one—not Waters nor his hired goons—have been held accountable for their actions, despite numerous official filings and complaints to HPD as well as to city and state officials.</p>

	<p class="indent-8">While the electricity has been turned off for over two months, water access is now also being threatened—a result of Waters withdrawing his Board of Water Supply account that was connected to the building. According to HRS 521, this is considered retaliatory action that is illegal and punishable by the law. This is just one of many, many legal violations that Waters has committed. Moreover, he has not shown up to any of the court summons for the utilities and lockout TROs filed against him. Neither has he been held in contempt of court yet, despite not following court orders to turn back the electricity on.</p>

	<p class="indent-8">One question that people have been asking us is: why has the city been slow to move against Waters, especially when he has clearly and repeatedly failed to comply with the law?</p>

	<p class="indent-8">I believe this has to do with the dominant narrative being peddled by both the media and the state.</p>

	<p class="indent-8">When Enshaquwa Moore, a former tenant who has been contending against Waters and Union Mall Development Group LCC in the courts for several months, <a href="https://www.civilbeat.org/2025/10/they-signed-up-for-co-living-in-honolulu-and-got-a-hell-hole/" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:visited:text-purple-800">told Civil Beat</a> that the building is now "like a hell hole," the phrase "hell hole" stuck to public sentiment. It was then repeatedly used in subsequent headlines of Civil Beat articles about Union Plaza, further fueling the criminalization and demonization of the tenants, which other news organizations such as <a href="https://www.hawaiinewsnow.com/2025/11/25/evicted-tenants-reoccupy-downtown-apartment-building-hostile-takeover/" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:visited:text-purple-800">Hawaii News Now</a> have unfortunately parroted. Additionally, the narrative pushed out by Waters that purport the tenants are "criminal squatters" and "drug addicts" further vilifies the tenants in the eyes of the public. Meanwhile, the city continues to add salt to the wound by forcing the tenants to shoulder the burden of Waters' gross negligence and retaliatory actions that have resulted in the building's deterioration.</p>

	<p class="indent-8">All of this, however, obscures the truth of the situation: <b>Chad Waters is directly responsible for what has happened to Union Plaza and its tenants, and should be held accountable by the city and state for his incompetence in managing the building and his violent actions towards the tenants that have resulted in immense physical and psychological harm and trauma.</b></p>

	<p class="indent-8">What the tenants are experiencing at Union Plaza echoes the Waiāhole-Waikāne struggle during the 1970s, when haole developers attempted to push forward their redevelopment agenda in the two valleys—the same agenda under which Waters and hundreds of other developers have operated across Hawai‘i. Though residents of Union Plaza may not be embroiled in the exact same dispute as residents of Waiāhole-Waikāne, it is important to read the situation through the lens of <b>a class struggle between the working class and the bourgeoisie in collusion with the reactionary state</b> that enables capitalists to do as they please while robbing the people of their right to live and resist the violence they receive. The crisis at Union Plaza is but a glimpse of a persistent, parasitic colonial violence enacted by foreign capitalist occupiers who exploit internal contradictions within the masses to ultimately generate more profit while absolving themselves of responsibility for the crises they create.</p>

	<p class="indent-8">My comrades and I from the Honolulu Tenants Union are taking up this campaign to support Union Plaza tenants because we want them to feel empowered to collectively take action and fight back against the slumlord Waters. We are also calling on city and state officials to do the right thing and protect the tenants, instead of punishing them for Waters' illegal actions.</p>

	<p class="indent-8">Our main demands are as follows:</p>

	<ul class="list-decimal mx-8">
	<li class="mb-4"><b>Hold Chad Waters accountable</b> for turning off electricity, canceling water, and canceling refuse, and for his numerous violent and retaliatory actions against the tenants.</li>
	<li class="mb-4"><b>Turn the utilities back on!</b> We demand safety and habitability for all tenants.</li>
	<li><b>Protect tenants from being evicted.</b> Respect their right to live in the building and ensure that they are protected from further retaliation by Waters.</li>
	</ul>

	<p class="indent-8">On the day Waters' so-called "in-house management" was finally kicked out by the tenants, one of the first things they did was open the front door and set up Christmas decorations in the lobby. Over the next several days, they worked together to clean up the entrance and several floors of the building to the best of their ability. Of course, the situation at the building is far from resolved. The tenants are still living under extremely unsafe living conditions as well as in fear and vigilance following Waters' continued retaliatory actions.</p>

	<p class="indent-8">Is there a future to be found in this so-called "hell hole"? With our support behind them, I think it's up to the tenants to carve this future out.</p>
</div>

<div class="flex w-full content-center justify-center justify-self-center bg-[#f9f3c6] py-2">
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
		<div class="text-right text-base md:text-lg">
			{months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
		</div>
	</div>
</div>
<div class="w-full max-w-[75%] text-right text-sm">
	a publication by the Democratic Socialists of O‘ahu
</div>

<a
	href="https://docs.google.com/forms/d/e/1FAIpQLSdoKrcmKykCo3PBA3Ya95dypEVdjZlIKwOkb91UbrTxgDelfQ/viewform"
	target="_blank"
	class="my-4 flex items-center justify-self-center italic hover:opacity-65"
>
	<div class="">Subscribe to</div>
	<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 260 245" class="ml-2 mr-1 h-7">
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


