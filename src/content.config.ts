import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
	loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
	schema: z.object({
		order: z.number(),
		title: z.string(),
		shortTitle: z.string(),
		tagline: z.string(),
		description: z.string(),
		icon: z.enum(['compass', 'academic', 'chart', 'document', 'chat']),
		whyNeeded: z.string(),
		whoFor: z.array(z.string()),
		process: z.array(z.object({ title: z.string(), description: z.string() })),
		outcomes: z.array(z.string()),
		faqCategory: z.string(),
	}),
});

const caseStudies = defineCollection({
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
	schema: z.object({
		order: z.number(),
		title: z.string(),
		summary: z.string(),
		background: z.string(),
		problem: z.string(),
		diagnosis: z.string(),
		solution: z.string(),
		result: z.string(),
	}),
});

const faqs = defineCollection({
	loader: glob({ base: './src/content/faqs', pattern: '**/*.md' }),
	schema: z.object({
		order: z.number(),
		question: z.string(),
		answer: z.string(),
		category: z.enum(['general', 'predoc', 'phd', 'career', 'cv', 'interview']),
		showOnHome: z.boolean().default(false),
	}),
});

export const collections = { services, 'case-studies': caseStudies, faqs };
