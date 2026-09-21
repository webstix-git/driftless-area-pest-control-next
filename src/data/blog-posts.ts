export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  /** Meta title segment (brand added by layout template). Keep ≤30 chars. */
  seoTitle: string;
  description: string;
  img: string;
  imgAlt: string;
  objectPosition?: string;
  cta: string;
  relatedService?: { href: string; label: string };
  intro: string[];
  sections: BlogSection[];
  takeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rodent-activity-warning-signs",
    tag: "Rodent Control",
    title: "5 Signs of Rodent Activity in Your Facility (And What to Do)",
    seoTitle: "5 Rodent Signs in Facilities",
    description:
      "Spot early mouse and rat signs in warehouses and food plants—droppings, gnaw marks, and nests—and act before an infestation spreads.",
    img: "/images/blog_rodent.jpg",
    imgAlt: "Rodent peeking from a hole in a concrete facility wall",
    objectPosition: "center 40%",
    cta: "Read Rodent Warning Signs",
    relatedService: { href: "/rodent-control", label: "Rodent Control & Exclusion" },
    intro: [
      "Rodent pressure rarely starts with a dramatic sighting. In warehouses, food plants, and commercial buildings, early signs usually show up in quiet corners — along walls, behind racking, near docks, and around stored product.",
      "Catching those signs early gives your team time to inspect, seal openings, and correct attractants before activity spreads through the facility.",
    ],
    sections: [
      {
        heading: "1. Droppings and urine trails",
        paragraphs: [
          "Fresh droppings along baseboards, pallet edges, and storage aisles are one of the clearest early warnings. Look near food storage, packaging, and warm mechanical rooms where rodents travel after dark.",
        ],
        bullets: [
          "Check along walls and under racking during night or early-morning walks",
          "Note concentration near docks, trash rooms, and break areas",
          "Mark locations so your team can track whether pressure is spreading",
        ],
      },
      {
        heading: "2. Gnaw marks on packaging and structure",
        paragraphs: [
          "Mice and rats chew to keep their teeth worn down and to open paths through packaging, foam, wood, and soft building materials. Fresh gnaw marks on bags, boxes, insulation, or door sweeps are a strong signal that rodents are active and feeding nearby.",
        ],
      },
      {
        heading: "3. Rub marks and grease trails",
        paragraphs: [
          "Rodents often use the same travel paths. Over time, dirty fur leaves dark rub marks along walls, pipes, and openings. These trails help you map how animals are moving through the building — and where exclusion work should focus.",
        ],
      },
      {
        heading: "4. Nesting material and shredded debris",
        paragraphs: [
          "Nests can form in wall voids, cluttered storage, insulation, and unused equipment. Shredded paper, packaging film, or soft debris pulled into a quiet corner often means rodents have settled in, not just passed through.",
        ],
      },
      {
        heading: "5. Live or dead rodents, and unusual pet or staff reports",
        paragraphs: [
          "A daytime sighting usually means pressure is already high. Staff reports of scratching in walls, odd smells, or rodents near docks and trash areas should trigger a walkthrough the same day — not a wait-and-see approach.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "When you see one or more of these signs, treat the situation as a facility issue — not a one-time clean-up. A practical response starts with inspection, then moves into source correction and ongoing monitoring.",
        ],
        bullets: [
          "Walk the site and map droppings, gnaw points, and likely entry gaps",
          "Reduce food, water, and clutter that keep rodents in place",
          "Seal openings around docks, pipes, and foundation gaps where possible",
          "Set a monitoring plan so activity stays visible between visits",
        ],
      },
    ],
    takeaways: [
      "Early signs matter more than waiting for a live sighting",
      "Track where activity clusters — walls, docks, storage, and warm rooms",
      "Fix entry points and attractants, not just the surface evidence",
      "Keep monitoring in place so pressure stays visible between service visits",
    ],
  },
  {
    slug: "dairy-farm-pest-prevention",
    tag: "Agricultural Pest Management",
    title: "Pest Prevention Strategies for Modern Dairy Farms",
    seoTitle: "Dairy Farm Pest Prevention",
    description:
      "Reduce fly and rodent pressure around barns, parlors, and feed areas with biosecurity-aware dairy pest prevention that protects herd health.",
    img: "/images/blog_dairy.jpg",
    imgAlt: "Holstein dairy cows feeding in a modern barn",
    objectPosition: "center 30%",
    cta: "Read Dairy Pest Guide",
    relatedService: {
      href: "/agricultural-pest-control",
      label: "Agricultural Pest Control",
    },
    intro: [
      "Dairy farms deal with pest pressure in places that matter for herd health and milk quality — barns, parlors, calf areas, feed alleys, and manure handling zones. Flies and rodents thrive where moisture, feed, and shelter overlap.",
      "Strong prevention is less about a single treatment and more about how the farm runs day to day: sanitation timing, structural openings, and biosecurity habits that keep pressure from building between visits.",
    ],
    sections: [
      {
        heading: "Focus on the high-pressure zones first",
        paragraphs: [
          "Not every part of a dairy has equal risk. Start where pests gain the most advantage — feed storage, parlor perimeters, calf housing, and areas where manure or spilled feed sits longer than it should.",
        ],
        bullets: [
          "Walk barns and parlors with an eye for moisture and spilled feed",
          "Check calf areas and hospital pens for harborage and attractants",
          "Inspect feed alleys, bunkers, and storage for rodent travel paths",
        ],
      },
      {
        heading: "Reduce fly pressure around barns and parlors",
        paragraphs: [
          "Fly pressure rises with warmth, moisture, and organic debris. Prevention works best when sanitation and structural habits support it — cleaned edges, managed manure flow, and fewer wet corners near animal housing.",
          "Targeted treatment still has a place, but lasting results usually come from correcting the conditions that keep flies reproducing on site.",
        ],
      },
      {
        heading: "Keep rodents out of feed and structural gaps",
        paragraphs: [
          "Rodents follow feed and shelter. Door gaps, utility penetrations, cluttered storage, and soft building materials give them easy access. A dairy rodent plan should combine inspection, exclusion where practical, and monitoring that fits farm traffic patterns.",
        ],
      },
      {
        heading: "Build prevention into biosecurity routines",
        paragraphs: [
          "Pest work on dairies has to respect livestock protocols and production schedules. The most useful programs follow site rules, communicate clearly with managers, and document what was found so the next visit builds on the last.",
        ],
        bullets: [
          "Align service timing with milking and chore schedules when possible",
          "Follow farm biosecurity expectations for entry and movement",
          "Keep notes managers can use for herd health and facility conversations",
        ],
      },
    ],
    takeaways: [
      "Prioritize barns, parlors, calf areas, and feed zones",
      "Pair sanitation with targeted fly and rodent control",
      "Seal and monitor structural openings that invite rodents",
      "Keep service biosecurity-aware and easy for managers to follow",
    ],
  },
  {
    slug: "spring-insect-control-prep",
    tag: "Insect Control",
    title: "Spring Insect Control: What to Expect and How to Prepare",
    seoTitle: "Spring Insect Control Prep",
    description:
      "Prepare for spring ants, flies, and crawling insects at commercial sites. Seasonal pressure points and steps to take before activity peaks.",
    img: "/images/blog_ants.jpg",
    imgAlt: "Black ants crawling along a surface crack",
    objectPosition: "center 35%",
    cta: "Read Spring Insect Tips",
    relatedService: {
      href: "/commercial-pest-control",
      label: "Commercial Pest Control",
    },
    intro: [
      "As temperatures rise, ants, flies, and crawling insects become more active around commercial buildings. Spring is when overwintering pests move, moisture returns, and exterior conditions start pushing insects toward docks, entries, and warm interior zones.",
      "Facilities that prepare before peak activity usually spend less time reacting later — with cleaner perimeters, clearer inspection routes, and a monitoring plan already in place.",
    ],
    sections: [
      {
        heading: "What spring pressure usually looks like",
        paragraphs: [
          "Ant trails often appear near entries, break rooms, and foundation cracks. Flies increase around trash, drains, and moisture. Spiders and other crawlers follow the insect food source toward lighting and sheltered exterior corners.",
        ],
        bullets: [
          "Ant activity around doors, windows, and kitchenettes",
          "Fly pressure near dumpsters, floor drains, and loading areas",
          "Crawling insects along baseboards and exterior wall lines",
        ],
      },
      {
        heading: "Prepare the exterior before activity peaks",
        paragraphs: [
          "Spring prep starts outside. Clear vegetation against walls, improve drainage where water pools, and reduce clutter that creates harborage. A cleaner perimeter makes inspections easier and gives insects fewer places to stage before entering.",
        ],
      },
      {
        heading: "Tighten interior habits that invite insects",
        paragraphs: [
          "Inside the building, focus on sanitation and moisture. Empty trash on schedule, wipe residue in break areas, and address leaky drains or standing water. These habits reduce attractants so treatments and monitoring do more useful work.",
        ],
      },
      {
        heading: "Set a monitoring plan for the season",
        paragraphs: [
          "Spring is a good time to reset sticky monitors, document baseline activity, and walk high-risk zones on a regular cadence. When activity rises, your team already knows where to look and what changed.",
        ],
        bullets: [
          "Place monitors in kitchens, docks, and mechanical rooms",
          "Record findings so trends are visible week to week",
          "Schedule a facility walkthrough before peak warm weather",
        ],
      },
    ],
    takeaways: [
      "Expect ants, flies, and crawlers as temperatures rise",
      "Clean perimeters and reduce exterior harborage early",
      "Fix moisture and sanitation issues indoors before peak season",
      "Use monitoring so spring activity stays visible and manageable",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}
