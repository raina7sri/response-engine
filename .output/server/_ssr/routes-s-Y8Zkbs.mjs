import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as AccordionTrigger$1, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as CardTitle, i as CardHeader, n as Card, o as cn, r as CardContent, t as Button } from "./card-B3QIWrqf.mjs";
import { _ as Briefcase, f as Copy, g as Check, h as ChevronDown, l as Lightbulb, m as ChevronUp, o as RefreshCw, p as CircleAlert, r as Star, s as Plus, u as Info } from "../_libs/lucide-react.mjs";
import { t as Label$1 } from "../_libs/radix-ui__react-label.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-s-Y8Zkbs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Label$1.displayName;
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var THEME_SIGNALS = [
	{
		key: "reading",
		label: "Reading progress",
		pillar: "Personalized learning",
		keywords: /\b(read(?:ing)?|phonics|comprehension|fluency|book)\b/i
	},
	{
		key: "math",
		label: "Math support",
		pillar: "Personalized learning",
		keywords: /\b(math|algebra|geometry|fractions?|multiplication)\b/i
	},
	{
		key: "writing",
		label: "Writing",
		pillar: "Personalized learning",
		keywords: /\b(writing|essay|paragraph|composition)\b/i
	},
	{
		key: "study",
		label: "Study skills",
		pillar: "Academic progress and confidence",
		keywords: /\b(study skills?|organization|homework habits?)\b/i
	},
	{
		key: "homework",
		label: "Homework help",
		pillar: "Supportive learning environment",
		keywords: /\b(homework|assignments?)\b/i
	},
	{
		key: "testprep",
		label: "Test prep",
		pillar: "Assessment-first support",
		keywords: /\b(sat|act|test prep|standardized|isee|ssat)\b/i
	},
	{
		key: "summer",
		label: "Summer learning",
		pillar: "Summer learning",
		keywords: /\b(summer|break|camp)\b/i
	},
	{
		key: "confidence",
		label: "Confidence",
		pillar: "Academic progress and confidence",
		keywords: /\b(confidence|confident|self[- ]esteem|proud|believe(?:s|d)?)\b/i
	},
	{
		key: "grades",
		label: "Grades and results",
		pillar: "Academic progress and confidence",
		keywords: /\b(grades?|score|improved|A[- ]|A\+|gpa)\b/i
	},
	{
		key: "teacher",
		label: "Teacher and staff",
		pillar: "Experienced educators",
		keywords: /\b(teacher|tutor|instructor|staff|educator)\b/i
	},
	{
		key: "schedule",
		label: "Scheduling and flexibility",
		pillar: "Flexible scheduling",
		keywords: /\b(schedul|flexible|availab|book(?:ed|ing)?|time slot)\b/i
	},
	{
		key: "communication",
		label: "Communication with parents",
		pillar: "Parent communication and progress reviews",
		keywords: /\b(communicat|updates?|progress report|meeting|conference)\b/i
	},
	{
		key: "assessment",
		label: "Assessment",
		pillar: "Assessment-first support",
		keywords: /\b(assessment|evaluat|diagnostic|placement)\b/i
	},
	{
		key: "environment",
		label: "Learning environment",
		pillar: "Supportive learning environment",
		keywords: /\b(welcoming|patient|kind|warm|environment|atmosphere|caring)\b/i
	},
	{
		key: "value",
		label: "Price and value",
		pillar: "Tutoring investment and value",
		keywords: /\b(price|cost|expensive|value|worth|money|afford|investment|pricey)\b/i
	},
	{
		key: "local",
		label: "Local center",
		pillar: "Local center identity",
		keywords: /\b(neighborhood|local|nearby|community)\b/i
	}
];
function detectThemes(review) {
	const found = THEME_SIGNALS.filter((s) => s.keywords.test(review));
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const s of found) if (!seen.has(s.label)) {
		seen.add(s.label);
		out.push(s);
	}
	return out.slice(0, 4);
}
var NEGATIVE_TERMS = /\b(rude|unprofessional|waste|refund|cancel|angry|awful|terrible|worst|disappointed|frustrat|slow|late|ignored|mistake|problem|issue|concern|complain|expensive|overpriced)\b/i;
var POSITIVE_TERMS = /\b(love|great|excellent|amazing|wonderful|fantastic|recommend|helpful|kind|patient|improved|progress|thank)\b/i;
function detectSentiment(review, stars) {
	if (!review.trim()) {
		if (stars >= 4) return "Positive (star-only)";
		if (stars === 3) return "Mixed (star-only)";
		return "Negative (star-only)";
	}
	const neg = NEGATIVE_TERMS.test(review);
	const pos = POSITIVE_TERMS.test(review);
	if (stars >= 5 && !neg) return "Strongly positive";
	if (stars === 4 && neg) return "Positive with a concern";
	if (stars === 4) return "Positive";
	if (stars === 3) return "Mixed";
	if (stars <= 2) return "Negative";
	if (pos && !neg) return "Positive";
	if (neg && !pos) return "Negative";
	return "Mixed";
}
function detectReviewType(review, stars) {
	const text = review.trim();
	if (!text) return "Star-only rating";
	const words = text.split(/\s+/).length;
	if (stars <= 2) return "Complaint";
	if (stars === 3) return "Mixed experience";
	if (words < 20) return "Brief endorsement";
	if (/\b(my (son|daughter|child|kid)|our (son|daughter|child|kid))\b/i.test(text)) return "Parent testimonial";
	return "Detailed positive review";
}
function detectImportantConcern(review, stars) {
	if (stars <= 3 || NEGATIVE_TERMS.test(review)) {
		if (/\b(schedul|book|time slot|cancel|reschedul)\b/i.test(review)) return "Scheduling experience";
		if (/\b(rude|unprofessional|staff|tutor|teacher)\b/i.test(review) && NEGATIVE_TERMS.test(review)) return "Staff interaction";
		if (/\b(price|cost|expensive|overpriced|refund|money)\b/i.test(review)) return "Price or billing";
		if (/\b(progress|results|improv)\b/i.test(review) && NEGATIVE_TERMS.test(review)) return "Perceived lack of progress";
		if (stars <= 2) return "Overall experience fell short";
		if (stars === 3) return "Mixed experience worth acknowledging";
	}
	return null;
}
function detectPrivacySensitivity(review) {
	const flags = [];
	if (/\b(adhd|dyslex|autis|iep|504|learning disab|learning differenc)\b/i.test(review)) flags.push("learning difference mentioned");
	if (/\b(grade [k1-9]|kindergarten|[1-9](st|nd|rd|th) grade)\b/i.test(review)) flags.push("child's grade level");
	if (/\b(score|gpa|reading level)\b/i.test(review)) flags.push("specific scores");
	if (/\bmy (son|daughter)\b/i.test(review) && /\b[A-Z][a-z]{2,}\b/.test(review)) flags.push("possible child name");
	if (!flags.length) return null;
	return `Do not amplify: ${flags.join(", ")}.`;
}
function selectPillars(themes, stars) {
	const pillars = [];
	for (const t of themes) {
		if (!pillars.includes(t.pillar)) pillars.push(t.pillar);
		if (pillars.length >= 2) break;
	}
	if (!pillars.length) pillars.push(stars >= 4 ? "Experienced educators" : "Supportive learning environment");
	return pillars;
}
var NON_NAME_VALUES = /* @__PURE__ */ new Set([
	"anonymous",
	"guest",
	"user",
	"customer",
	"reviewer",
	"google",
	"a",
	"unknown",
	"n/a",
	"na"
]);
function firstNameOnly(name) {
	if (!name) return null;
	const clean = name.trim().split(/\s+/)[0];
	if (!clean) return null;
	if (NON_NAME_VALUES.has(clean.toLowerCase())) return null;
	return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
}
function childNameIfDisclosed(review) {
	const m = review.match(/\bmy (?:son|daughter|child|kid)[,]?\s+([A-Z][a-z]{1,20})\b/);
	if (m) return m[1];
	return null;
}
function pillarSentence(pillar, center) {
	switch (pillar) {
		case "Personalized learning": return "Every plan we build is shaped around the individual student, so what happens in each session is intentional rather than generic.";
		case "Assessment-first support": return "Starting with a clear picture of where a student is helps us focus each session on what will actually move things forward.";
		case "Experienced educators": return "Our team of experienced educators takes real care in how they work with each family.";
		case "Academic progress and confidence": return "Steady progress and growing confidence tend to build together, and that is what we try to protect week to week.";
		case "Parent communication and progress reviews": return "Keeping parents in the loop on what is working, and what to adjust, is part of how we do this well.";
		case "Supportive learning environment": return "We want the center to feel like a place students actually want to walk into.";
		case "Flexible scheduling": return "We know families are juggling a lot, so we try to make scheduling work around real life.";
		case "Summer learning": return "Summer is a good window to reinforce skills without the pressure of the school year.";
		case "Tutoring investment and value": return "Tutoring is a real investment, and our goal is to make sure it is a worthwhile one.";
		case "Local center identity": return `We are proud to be part of the community around ${center}.`;
		default: return "";
	}
}
function openingThank(reviewer, stars, hasConcern = false) {
	const name = reviewer ? `, ${reviewer},` : "";
	if (stars >= 5) return `Thank you${name} for taking the time to share this.`;
	if (stars === 4 && hasConcern) return `Thank you${name} for the kind words and for the honest feedback.`;
	if (stars === 4) return `Thank you${name} for taking the time to share this.`;
	if (stars === 3) return `Thank you${name} for the thoughtful feedback — both the positives and the concerns.`;
	return `Thank you${name} for taking the time to share this. We are sorry the experience fell short of what you were hoping for.`;
}
function reflection(themes, stars) {
	if (!themes.length) return "";
	const t = themes[0];
	const pos = stars >= 4;
	switch (t.key) {
		case "reading": return pos ? "Watching a student turn a corner with reading is one of the most rewarding things we get to be part of." : "Reading growth is deeply personal for a student, and we take that seriously.";
		case "math": return pos ? "Math often starts to click once a student feels genuinely supported through the tough parts." : "Math confidence can be fragile, and we try to be careful with it.";
		case "writing": return "Writing is one of those skills that grows quietly, and it is good to hear it noticed.";
		case "testprep": return pos ? "Preparing for a big test is as much about steadiness as it is about content." : "Test prep should feel like a plan, not a scramble, and we hear you.";
		case "summer": return "Summer is a good window to keep momentum without the pressure of the school year.";
		case "confidence": return "Confidence is often the quiet result of steady, well-fitted support, and it means a lot to hear it show up.";
		case "grades": return "Progress that shows up in day-to-day schoolwork is what we most hope for.";
		case "teacher": return pos ? "It means a lot to hear that the team came through the way we always hope they do." : "How our team shows up matters to us, and we take this seriously.";
		case "schedule": return "Scheduling should support the family, not add to the stress, so we appreciate you naming it.";
		case "communication": return "Keeping parents genuinely informed is part of the work, not an afterthought.";
		case "value": return "Tutoring is a real investment for a family, and it should feel like a worthwhile one.";
		case "environment": return "How the center feels day to day is something we care about a lot.";
		default: return "";
	}
}
function closing(stars, center) {
	if (stars >= 5) return `We are grateful you chose ${center}.`;
	if (stars === 4) return `We appreciate you being part of the ${center} community.`;
	if (stars === 3) return `We would welcome the chance to talk directly — please reach out to ${center} so we can better understand your experience.`;
	return `If you are open to it, please reach out to ${center} directly so we can better understand what happened and try to make it right.`;
}
function trimSentences(text, maxSentences) {
	return (text.match(/[^.!?]+[.!?]+\s*/g) ?? [text]).slice(0, maxSentences).join(" ").trim();
}
function composeResponse(input, themes, pillars) {
	const { review, stars, center, additionalContext, regenerateSeed = 0 } = input;
	const reviewer = firstNameOnly(input.reviewerName);
	const disclosedChildName = childNameIfDisclosed(review);
	const words = review.trim().split(/\s+/).filter(Boolean).length;
	if (words === 0) {
		if (stars >= 4) return reviewer ? `Thank you, ${reviewer}. We appreciate your support of ${center}.` : `Thank you. We appreciate your support of ${center}.`;
		return reviewer ? `Thank you for the rating, ${reviewer}. If you are open to it, we would welcome the chance to hear more about your experience with ${center}.` : `Thank you for the rating. If you are open to it, we would welcome the chance to hear more about your experience with ${center}.`;
	}
	const open = openingThank(reviewer, stars, NEGATIVE_TERMS.test(review));
	const reflect = reflection(themes, stars);
	const rotated = pillars.length > 1 && regenerateSeed % 2 === 1 ? [
		pillars[1],
		pillars[0],
		...pillars.slice(2)
	] : pillars;
	const pillarLine = pillarSentence(rotated[0], center);
	const secondPillar = rotated[1] && stars >= 4 && words > 40 ? pillarSentence(rotated[1], center) : "";
	const close = closing(stars, center);
	let childTouch = "";
	if (disclosedChildName && stars >= 4 && regenerateSeed % 2 === 0) childTouch = ` It sounds like ${disclosedChildName} has been putting in real effort, and that always matters.`;
	let contextNudge = "";
	if (additionalContext) {
		if (/no longer works|former|used to work/i.test(additionalContext)) {}
		if (/scheduling|schedule/i.test(additionalContext) && stars <= 4) contextNudge = " We also hear the feedback on scheduling and are looking at it directly.";
		if (/do not mention pricing|no pricing/i.test(additionalContext)) {}
	}
	let body;
	if (words < 15) {
		body = [
			open,
			reflect || pillarLine,
			close
		].filter(Boolean).join(" ");
		body = trimSentences(body, 2);
	} else if (words < 60) {
		body = [
			open,
			reflect,
			pillarLine,
			childTouch,
			contextNudge,
			close
		].filter(Boolean).join(" ");
		body = trimSentences(body, stars <= 3 ? 3 : 4);
	} else {
		body = [
			open,
			reflect,
			pillarLine,
			secondPillar,
			childTouch,
			contextNudge,
			close
		].filter(Boolean).join(" ");
		body = trimSentences(body, stars <= 3 ? 4 : 5);
	}
	return body.replace(/\s+/g, " ").trim();
}
function whyItWorks(themes, pillars, center, stars) {
	const themeLabel = themes[0]?.label ?? (stars >= 4 ? "the overall positive experience" : "the concern raised");
	const bullets = [];
	bullets.push(`Reflects ${themeLabel.toLowerCase()} conceptually without echoing the reviewer's phrasing.`);
	bullets.push(`Reinforces ${pillars.slice(0, 2).join(" and ").toLowerCase()} without stacking every brand strength at once.`);
	bullets.push(`Names ${center} naturally to support local trust and steady search signals, without keyword stuffing.`);
	return bullets;
}
function reviewConsiderations(input, themes, concern, privacy) {
	const items = [];
	if (themes.some((t) => t.key === "value") || /price|cost|value|expensive|worth/i.test(input.review)) items.push("Price came up — keep the framing on investment and value; do not position the brand as cheap or apologize for pricing.");
	if (input.stars <= 3 || concern) items.push("Acknowledge the concern directly, without debating specifics publicly. If details are needed, keep the follow-up offline.");
	if (privacy) items.push("A private detail about the student appeared in the review. Do not repeat or expand on it in the public response.");
	if (/certified|credential|licensed/i.test(input.review + " " + (input.additionalContext ?? ""))) items.push("Only use \"certified teachers\" if confirmed for this center; otherwise use \"experienced educators.\"");
	if (/no longer works|former|used to work|left the center/i.test(input.additionalContext ?? "")) items.push("A named staff member is no longer at the center — do not repeat the name in the response.");
	if (input.stars <= 2) items.push("This may warrant a direct offline follow-up in addition to the public reply.");
	if (/old|older|last year|years ago/i.test(input.additionalContext ?? "")) items.push("Reviewer's experience is older — a brief acknowledgment of time passed can be appropriate, without over-explaining.");
	return items;
}
function aiInsight(themes, stars, review) {
	if (stars >= 4 && themes.some((t) => t.key === "confidence") && !/grade|score/i.test(review)) return "Confidence, mentioned without a grade or score, is a strong testimonial pattern — worth watching for in future reviews as a soft-signal theme.";
	if (themes.some((t) => t.key === "schedule") && stars >= 4) return "Scheduling praised as a positive is a quiet trust signal — a useful content angle for parent-facing pages.";
	if (themes.some((t) => t.key === "reading") && stars >= 4) return "Reading progress stories consistently resonate with prospective parents and are worth surfacing on the center's page.";
	return null;
}
function generateResponse(input) {
	const themes = detectThemes(input.review);
	const pillars = selectPillars(themes, input.stars);
	const concern = detectImportantConcern(input.review, input.stars);
	const privacy = detectPrivacySensitivity(input.review);
	return {
		analysis: {
			reviewType: detectReviewType(input.review, input.stars),
			sentiment: detectSentiment(input.review, input.stars),
			primaryThemes: themes.map((t) => t.label).slice(0, 3),
			relevantPillars: pillars,
			importantConcern: concern,
			privacySensitivity: privacy
		},
		recommendedResponse: composeResponse(input, themes, pillars),
		whyThisResponseWorks: whyItWorks(themes, pillars, input.center, input.stars),
		reviewConsiderations: reviewConsiderations(input, themes, concern, privacy),
		aiInsight: aiInsight(themes, input.stars, input.review)
	};
}
var APPROVED_EXAMPLES = [
	{
		label: "Short five-star",
		scenario: "5★ · brief endorsement",
		example: "Thank you for taking the time to share this. It means a lot to hear that the experience has been a good one, and we are grateful you chose <enter organization>."
	},
	{
		label: "Detailed positive",
		scenario: "5★ · detailed testimonial",
		example: "Thank you for such a thoughtful review. Every plan we build is shaped around the individual customer, so what happens in each interaction is intentional. It is genuinely rewarding to hear that the work is showing up in the way you described, and we are grateful to be part of it at <enter organization>."
	},
	{
		label: "Reading progress",
		scenario: "5★ · reading growth",
		example: "Thank you for sharing this. Watching a learner turn a corner with reading is one of the most rewarding things we get to be part of, and it means a lot to hear it. We are grateful you chose <enter organization>."
	},
	{
		label: "Price and value",
		scenario: "4★ · value framing",
		example: "Thank you for the honest feedback. Tutoring is a real investment for a family, and our goal is to make sure it is a worthwhile one — with support that fits individual needs and provides steady improvement over time. We appreciate you being part of our customer community at <enter organization>."
	},
	{
		label: "Mixed",
		scenario: "3★ · mixed experience",
		example: "Thank you for the thoughtful feedback — both the positives and the concerns. We take this seriously and would welcome the chance to talk directly. Please reach out to us at <enter organization contact details> so we can better understand your experience."
	},
	{
		label: "Negative",
		scenario: "1★ · complaint",
		example: "Thank you for taking the time to share this. We are sorry the experience fell short of what you were hoping for. If you are open to it, please reach out to us so we can better understand what happened and try to make it right."
	}
];
var AURICS_MARK_URL = `/aurics-favicon.png`;
var DEFAULT_ORGANIZATIONS = ["Sample Organization A", "Sample Organization B"];
var USE_CASES = [
	"Customer feedback",
	"Objection responses",
	"Support communications",
	"Sales replies"
];
var ADD_NEW_VALUE = "__add_new__";
function StarPicker({ value, onChange }) {
	const [hover, setHover] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "radiogroup",
		"aria-label": "Star rating",
		className: "flex items-center gap-1",
		onMouseLeave: () => setHover(0),
		children: [[
			1,
			2,
			3,
			4,
			5
		].map((n) => {
			const active = (hover || value) >= n;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": value === n,
				"aria-label": `${n} star${n === 1 ? "" : "s"}`,
				onClick: () => onChange(n),
				onMouseEnter: () => setHover(n),
				onKeyDown: (e) => {
					if (e.key === "ArrowRight") onChange(Math.min(5, (value || 0) + 1));
					if (e.key === "ArrowLeft") onChange(Math.max(1, (value || 1) - 1));
				},
				className: "rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-7 w-7 transition-colors " + (active ? "fill-[var(--accent)] text-accent" : "text-muted-foreground/40") })
			}, n);
		}), value > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ml-2 text-sm text-muted-foreground",
			children: [value, " / 5"]
		})]
	});
}
function AnalysisRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)] items-start gap-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm text-foreground",
			children: value
		})]
	});
}
function Index() {
	const [review, setReview] = (0, import_react.useState)("");
	const [reviewerName, setReviewerName] = (0, import_react.useState)("");
	const [organizations, setOrganizations] = (0, import_react.useState)(DEFAULT_ORGANIZATIONS);
	const [center, setCenter] = (0, import_react.useState)("");
	const [addingOrg, setAddingOrg] = (0, import_react.useState)(false);
	const [newOrgName, setNewOrgName] = (0, import_react.useState)("");
	const [stars, setStars] = (0, import_react.useState)(0);
	const [additionalContext, setAdditionalContext] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [editableResponse, setEditableResponse] = (0, import_react.useState)("");
	const [regenCount, setRegenCount] = (0, import_react.useState)(0);
	const resultsRef = (0, import_react.useRef)(null);
	const canSubmit = (0, import_react.useMemo)(() => {
		if (!stars) return false;
		if (!center) return false;
		if (!review.trim() && stars === 0) return false;
		return true;
	}, [
		review,
		stars,
		center
	]);
	const validate = () => {
		if (!stars) return "Please select a star rating.";
		if (!center) return "Please select an organization.";
		return null;
	};
	const runGenerate = async (seed = 0) => {
		const err = validate();
		if (err) {
			toast.error(err);
			return;
		}
		setLoading(true);
		await new Promise((r) => setTimeout(r, 550));
		try {
			const out = generateResponse({
				review,
				reviewerName: reviewerName || void 0,
				center,
				stars,
				additionalContext: additionalContext || void 0,
				regenerateSeed: seed
			});
			setResult(out);
			setEditableResponse(out.recommendedResponse);
			setTimeout(() => {
				resultsRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}, 30);
		} catch {
			toast.error("Something went wrong drafting the response. Your inputs are preserved.");
		} finally {
			setLoading(false);
		}
	};
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(editableResponse);
			toast.success("Response copied.");
		} catch {
			toast.error("Could not copy — please copy manually.");
		}
	};
	const handleRegenerate = () => {
		const next = regenCount + 1;
		setRegenCount(next);
		runGenerate(next);
	};
	const handleOrgChange = (value) => {
		if (value === ADD_NEW_VALUE) {
			setAddingOrg(true);
			return;
		}
		setCenter(value);
	};
	const handleAddOrg = () => {
		const name = newOrgName.trim();
		if (!name) {
			toast.error("Enter an organization name.");
			return;
		}
		if (organizations.includes(name)) {
			toast.error("That organization already exists.");
			return;
		}
		setOrganizations((prev) => [...prev, name]);
		setCenter(name);
		setNewOrgName("");
		setAddingOrg(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-center",
				richColors: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full bg-gradient-to-r from-primary via-[oklch(0.46_0.20_285)] to-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl items-center justify-center gap-3 px-4 py-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: AURICS_MARK_URL,
						alt: "Aurics.AI brand logo",
						className: "h-11 w-auto rounded-xl border-2 border-primary-foreground/20 shadow-lg sm:h-12",
						width: 80,
						height: 80
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-sm font-semibold tracking-tight text-primary-foreground sm:inline",
						children: "Aurics.AI — AI-Native GTM Studio"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-gradient-to-r from-accent/80 via-[oklch(0.85_0.16_85)] to-accent/80" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border/60 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 py-6 text-center sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
							children: "AI-NATIVE GTM: PRODUCTION IMPLEMENTATION"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]",
							children: "Customer Response Engine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: "A reusable workflow that turns customer communications into governed, brand-aligned responses while reserving business judgment for humans."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full border-b border-border/60 bg-card/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
							children: "Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "text-muted-foreground/60",
							children: "·"
						}),
						[
							"Customer Communication",
							"AI Reasoning",
							"Organization Playbook",
							"Adaptive Response",
							"Human Judgment",
							"Publish"
						].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-foreground",
								children: step
							}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "text-base text-primary/60",
								children: "→"
							})]
						}, step))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
								className: "pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "text-base",
									children: "Draft a response"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Paste the request and get a customer response."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "review",
												children: "Customer communication"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												id: "review",
												value: review,
												onChange: (e) => setReview(e.target.value),
												placeholder: "Paste the communication. The system determines the rest.",
												className: "min-h-[160px] resize-y"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Leave blank for a star-only review."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "reviewerName",
												children: "Customer name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "reviewerName",
												value: reviewerName,
												onChange: (e) => setReviewerName(e.target.value),
												placeholder: "e.g. Jamie"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Star rating (if applicable)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarPicker, {
												value: stars,
												onChange: setStars
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Organization" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: center,
												onValueChange: handleOrgChange,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "w-full",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select Organization" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [organizations.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: org,
													children: org
												}, org)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: ADD_NEW_VALUE,
													className: "text-primary",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), "Add new organization…"]
													})
												})] })]
											}),
											addingOrg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2 rounded-md border border-border bg-muted/30 p-3 sm:flex-row",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													autoFocus: true,
													value: newOrgName,
													onChange: (e) => setNewOrgName(e.target.value),
													onKeyDown: (e) => {
														if (e.key === "Enter") {
															e.preventDefault();
															handleAddOrg();
														}
													},
													placeholder: "New organization name",
													className: "flex-1"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														type: "button",
														onClick: handleAddOrg,
														size: "sm",
														children: "Add"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														type: "button",
														variant: "ghost",
														size: "sm",
														onClick: () => {
															setAddingOrg(false);
															setNewOrgName("");
														},
														children: "Cancel"
													})]
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "additionalContext",
												children: "Additional context"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												id: "additionalContext",
												value: additionalContext,
												onChange: (e) => setAdditionalContext(e.target.value),
												placeholder: "e.g. The product has been discontinued. Please share the updated pricing.",
												className: "min-h-[90px] resize-y"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Add only information the assistant could not know from the pasted content."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Using approved example set."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => runGenerate(0),
											disabled: !canSubmit || loading,
											size: "lg",
											children: loading ? "Analyzing…" : "Analyze and Draft Response"
										})]
									}),
									loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-xs text-muted-foreground",
										children: "Analyzing the review and applying the organization playbook…"
									})
								]
							})]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "lg:sticky lg:top-6 lg:self-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-accent/40 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
									className: "pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
										className: "flex items-center gap-2 text-base",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4 w-4 text-accent" }), "Potential Implementations"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
										children: "Sales · Marketing · Customer Service"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-3 h-px w-10 bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-sm text-foreground",
									children: USE_CASES.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: u })]
									}, u))
								})] })]
							})
						})]
					}),
					result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: resultsRef,
						className: "mt-10 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
									className: "pb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-base",
										children: "Review Analysis"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "divide-y divide-border/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisRow, {
											label: "Review type",
											value: result.analysis.reviewType
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisRow, {
											label: "Sentiment",
											value: result.analysis.sentiment
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisRow, {
											label: "Primary themes",
											value: result.analysis.primaryThemes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: result.analysis.primaryThemes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "secondary",
													className: "font-normal",
													children: t
												}, t))
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "—"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisRow, {
											label: "Organization strengths",
											value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: result.analysis.relevantPillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "font-normal",
													children: p
												}, p))
											})
										}),
										result.analysis.importantConcern && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisRow, {
											label: "Important concern",
											value: result.analysis.importantConcern
										}),
										result.analysis.privacySensitivity && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisRow, {
											label: "Privacy sensitivity",
											value: result.analysis.privacySensitivity
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
									className: "pb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-base",
										children: "Recommended Response"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: editableResponse,
										onChange: (e) => setEditableResponse(e.target.value),
										className: "min-h-[180px] resize-y text-base leading-relaxed"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: handleCopy,
											className: "gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), " Copy Response"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											onClick: handleRegenerate,
											disabled: loading,
											className: "gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 " + (loading ? "animate-spin" : "") }), "Regenerate"]
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
									className: "pb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-base",
										children: "Why This Response Works"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: result.whyThisResponseWorks.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-sm text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w })]
									}, i))
								}) })]
							}),
							result.reviewConsiderations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-accent/50 bg-accent/10 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
									className: "pb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
										className: "flex items-center gap-2 text-base",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-primary" }), "Review Before Posting"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: result.reviewConsiderations.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-sm text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c })]
									}, i))
								}) })]
							}),
							result.aiInsight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-primary/20 bg-primary/5 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
									className: "pb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
										className: "flex items-center gap-2 text-base",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-4 w-4 text-primary" }), "AI Insight"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-foreground",
									children: result.aiInsight
								}) })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "rounded-lg border-2 border-primary/40 bg-primary/[0.03] shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "playbook",
								className: "border-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "px-5 py-4 text-base font-semibold hover:no-underline text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-5 w-5 text-primary" }), "Customer Response Playbook"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
									className: "px-5 pb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-md border border-primary/30 bg-primary/[0.06] p-3 text-xs text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: "Formula:"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Thank" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 rotate-[-90deg] text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reflect without copying" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 rotate-[-90deg] text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reinforce one or two organization strengths" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 rotate-[-90deg] text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Address concerns if necessary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 rotate-[-90deg] text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Close warmly" })
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
										type: "multiple",
										className: "mt-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "why",
												title: "Why Respond to Customers?",
												children: "Responding shows current and future customers that the organization takes feedback seriously. It builds trust, reinforces a consistent brand voice, and provides quiet, credible signals that do not read as self-promotion."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "formula",
												title: "The Response Formula",
												children: "Thank the customer, reflect one meaningful idea from their communication conceptually, reinforce one or two organization strengths, address any concern calmly if needed, and close with appreciation rather than a sales pitch."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "mirror",
												title: "Conceptual Mirroring",
												children: "Show that you understood what the customer meant - do not rewrite their sentence, repeat distinctive phrases, or publish similar sentences with minor substitutions."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "pillars",
												title: "Core Messaging Pillars",
												children: "Personalized learning · Individualized support · Experienced instructors · Learner progress and confidence · Regular communication · Supportive environment · Flexible scheduling · Year-round availability · Return on investment and customer value · Established brand. Choose one or two per response."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "value",
												title: "Price and Value",
												children: "Only address price when the customer communication or context makes it relevant. Frame as a meaningful investment and connect value to personalized support, experienced instructors, and steady academic progress."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "mixed",
												title: "Mixed and Negative Reviews",
												children: "Acknowledge the concern without defensiveness. Do not debate specifics publicly or reveal account details. When resolution requires private information, invite the customer to contact the organization directly."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "privacy",
												title: "Privacy",
												children: "Never invent or add sensitive customer details. Only use a name if the customer already did publicly and it clearly helps.\xA0"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "seo",
												title: "SEO, AEO, and GEO",
												children: "Support these through natural, consistent content, such as accurate entity and service context (SEO), clear language that addresses common customer questions (AEO), and credible associations between the business, geographic presence, and outcomes (GEO).\xA0"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaybookItem, {
												value: "examples",
												title: "Example Responses",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "space-y-3",
													children: APPROVED_EXAMPLES.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-md border border-border bg-muted/30 p-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mb-1 flex items-center gap-2 text-xs text-muted-foreground",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																variant: "outline",
																className: "font-normal border-primary/30 text-primary",
																children: ex.label
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ex.scenario })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm leading-relaxed text-foreground",
															children: ex.example
														})]
													}, ex.label))
												})
											})
										]
									})]
								})]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "rounded-lg border-2 border-accent/50 bg-accent/[0.05] shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "who",
								className: "border-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "px-5 py-4 text-base font-semibold hover:no-underline text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-5 w-5 text-accent-foreground" }), "Who Is It For?"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "px-5 pb-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 text-sm leading-relaxed text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Any customer-facing team that answers the same questions repeatedly — and needs to ensure every response reflects the organization's messaging, customer knowledge, and judgment while remaining consistent across people and channels." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This workflow redesigns that process." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rather than asking people to analyze every message manually, the system performs repeatable reasoning and leaves only business-context decisions to the human." })
										]
									})
								})]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-6 mb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "rounded-lg border-2 border-violet/50 bg-violet/[0.05] shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "portfolio",
								className: "border-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "px-5 py-4 text-base font-semibold hover:no-underline text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5 text-violet" }), "How This AI Workflow Turns Any Customer Message Into a Branded Response"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
									className: "space-y-6 px-5 pb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-semibold uppercase tracking-wide text-violet",
												children: "What Is It?"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-sm leading-relaxed space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A reusable AI-native reasoning workflow that turns organizational judgment into a repeatable system." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It has been designed to combine retrieval, structured reasoning, domain-specific prompting, and explainable outputs to operationalize customer responses across the organization. The result is a repeatable human-in-the-loop system that reduces response time while maintaining a consistent, trustworthy brand experience with ready-to-use customer responses." })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-semibold uppercase tracking-wide text-violet",
												children: "How Does It Work?"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap items-center gap-x-2 gap-y-2 py-2",
												children: [
													"Customer Communication",
													"Analyze",
													"Apply Organizational Playbook",
													"Generate Response",
													"Explain Reasoning",
													"Surface Human Decisions",
													"Publish"
												].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-md border border-violet/40 bg-violet/[0.08] px-3 py-1.5 text-sm text-foreground",
														children: step
													}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														"aria-hidden": true,
														className: "text-base text-violet/70",
														children: "→"
													})]
												}, step))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-semibold uppercase tracking-wide text-violet",
												children: "Steps Taken"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "ml-1 space-y-1.5 text-sm",
												children: [
													"Retrieves recent approved response history",
													"Analyzes sentiment, themes, concerns, and privacy risk",
													"Applies the organization messaging playbook",
													"Generates one editable response",
													"Explains why it works",
													"Educates through interaction",
													"Keeps final business-context judgment with the human"
												].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														"aria-hidden": true,
														className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/80"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
												}, p))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-semibold uppercase tracking-wide text-violet",
												children: "How the Workflow Uses Approved Responses"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-sm leading-relaxed space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The production architecture is designed to learn from responses the organization has already approved and published. This can be through live review history retrieval or pre-seeded examples covering common scenarios such as short reviews, detailed testimonials, progress stories, and mixed and negative feedback." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In the current version, the examples serve as a visible reference library for approved tone, structure, and edge-case handling, while the generator applies the encoded business playbook. A next-level version would dynamically retrieve the most relevant approved examples for each incoming customer message and include them as generation context." })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg border-2 border-violet/40 bg-gradient-to-br from-violet/[0.08] to-accent/[0.08] p-5 space-y-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-sm font-semibold uppercase tracking-wide text-violet",
													children: "Human Judgment, AI Repetition"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-5 sm:grid-cols-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold text-foreground",
															children: "Human Decides:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
															className: "space-y-1.5 text-sm text-foreground",
															children: [
																"Changing business circumstances",
																"Sensitive customer context",
																"Legal issues",
																"Exceptions",
																"Final publication"
															].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
																className: "flex gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-violet",
																	children: "✓"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
															}, item))
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold text-foreground",
															children: "AI Determines:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
															className: "space-y-1.5 text-sm text-foreground",
															children: [
																"Themes",
																"Intent",
																"Structure",
																"Tone",
																"Draft"
															].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
																className: "flex gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-violet",
																	children: "✓"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
															}, item))
														})]
													})]
												})]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-semibold uppercase tracking-wide text-violet",
												children: "Same Engine, Different Domain: G2 Reviews"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-relaxed",
												children: "The reasoning architecture remains the same:"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
												className: "ml-4 list-decimal space-y-1 text-sm",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Retrieve approved published responses" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Analyze the new review" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Identify sentiment, themes, risks, and opportunities" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Apply a domain-specific messaging framework" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Generate a natural response" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Explain why it works" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Surface only business considerations requiring human review" })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-relaxed",
												children: "The messaging layer is replaced with categories like time to value, ease of implementation, adoption, support quality, reliability, integrations, security and compliance, workflow fit, product capabilities, AI and automation, ROI, feature gaps, and renewal or expansion signals."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-md border border-violet/40 bg-violet/[0.08] p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mb-1 text-sm font-semibold uppercase tracking-wide text-violet",
													children: "Example Guardrails"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "ml-1 space-y-1.5 text-sm",
													children: [
														"No disclosure of customer contract terms",
														"Do not debate feature requests publicly",
														"Distinguish product limitations from implementation issues",
														"Avoid unsupported ROI claims",
														"Coordinate with customer success on serious concerns",
														"Recognize advocacy, testimonial, analyst-relations, and case-study opportunities",
														"Maintain consistency across G2, Capterra, Gartner Peer Insights, and similar platforms"
													].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															"aria-hidden": true,
															className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/80"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: g })]
													}, g))
												})]
											})
										]
									})]
								})]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-10 mb-16 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Built by Aurics.AI: An AI-Native GTM Studio"
						}), "\xA0"] })
					})
				]
			})
		]
	});
}
function PlaybookItem({ value, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
		value,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
			className: "text-sm hover:no-underline",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
			className: "text-sm leading-relaxed text-foreground/90",
			children
		})]
	});
}
//#endregion
export { Index as component };
