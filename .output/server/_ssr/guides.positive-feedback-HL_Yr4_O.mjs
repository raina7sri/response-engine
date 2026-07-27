import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Card, r as CardContent, t as Button } from "./card-B3QIWrqf.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Repeat, c as MessageCircle, d as Heart, f as Copy, g as Check, i as Sparkles, n as ThumbsUp, r as Star, t as Users, v as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides.positive-feedback-HL_Yr4_O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EXAMPLES = [
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-[var(--accent)]" }),
		label: "Product praise",
		text: "Thank you so much, [Name]! We're thrilled to hear [specific product] is working well for you. Helping customers get real results is exactly why we built it, and we'd love to keep supporting you as you grow."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 text-[var(--accent)]" }),
		label: "Service praise",
		text: "We really appreciate you taking the time to share this, [Name]. Delivering a thoughtful, human experience is a core part of who we are, and feedback like yours lets the team know they're making a difference."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-[var(--accent)]" }),
		label: "Team member shout-out",
		text: "Thank you, [Name]! We've shared your kind words with [Team Member] and the whole team. Celebrating individual care is one of our favorite parts of the day, and we're grateful you noticed."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-5 w-5 text-[var(--accent)]" }),
		label: "Repeat customer",
		text: "It means the world to us that you keep coming back, [Name]. Long-term relationships like yours are the foundation of our business, and we look forward to continuing to earn your trust every time."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-[var(--accent)]" }),
		label: "Social media mention",
		text: "So glad you shared this, [Name]! Community feedback is how we learn what matters most. Thanks for being part of the conversation and helping others discover what we do."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "h-5 w-5 text-[var(--accent)]" }),
		label: "Short and warm",
		text: "Thank you, [Name]! We genuinely appreciate your support and are so glad you had a great experience. We're here whenever you need us."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 text-[var(--accent)]" }),
		label: "Values-driven",
		text: "Thank you for the wonderful feedback, [Name]. Putting [core value, e.g., personalized support] at the center of every interaction is non-negotiable for us, and we're delighted that came through in your experience."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-[var(--accent)]" }),
		label: "Invite them back",
		text: "Thank you, [Name]! We're so happy you had a great experience. We'd love to welcome you back soon — and please don't hesitate to reach out if there's anything else we can do for you."
	}
];
function PositiveFeedbackGuide() {
	const [copied, setCopied] = (0, import_react.useState)(null);
	const copy = async (text, label) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(label);
			setTimeout(() => setCopied(null), 2e3);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border/40 bg-[var(--card)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 text-sm font-semibold text-foreground hover:text-[var(--primary)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to Customer Response Assistant"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-[var(--primary)]",
						children: "Aurics.AI"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mb-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-3 inline-block rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]",
								children: "Customer Response Guide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
								children: "Positive Feedback Examples"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: "Respond to great reviews in a way that reinforces your brand, builds loyalty, and invites repeat business — without sounding like a sales pitch."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold text-foreground",
								children: "Why respond to positive feedback?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "A positive review is more than a compliment. It is a public signal of trust, a chance to show your brand voice, and an invitation for future customers to picture themselves working with you. A thoughtful reply can:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 list-disc space-y-2 pl-5 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Strengthen the relationship with the customer who left the review." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Reinforce one or two of your organization's core strengths." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Show future customers that you listen, care, and respond like a human." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Encourage repeat business without adding pressure." })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Anatomy of a strong response"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-2",
							children: [
								{
									title: "Thank",
									body: "Open with genuine gratitude."
								},
								{
									title: "Reflect",
									body: "Reference the specific moment or detail they shared."
								},
								{
									title: "Reinforce",
									body: "Connect their praise to a brand strength or value."
								},
								{
									title: "Close",
									body: "End warmly and leave the door open for next time."
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-[var(--card)] p-4 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-[var(--primary)]",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: item.body
								})]
							}, item.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold text-foreground",
								children: "Copy-paste positive feedback examples"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Replace [Name] and bracketed details with your own context. Each example is designed to sound natural while reinforcing what makes your organization different."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: EXAMPLES.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									className: "overflow-hidden border-border bg-[var(--card)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [example.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-foreground",
													children: example.label
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-base leading-relaxed text-foreground",
												children: example.text
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 flex justify-end",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "outline",
													size: "sm",
													onClick: () => copy(example.text, example.label),
													className: "gap-2 border-border bg-background hover:bg-[var(--secondary)]",
													children: copied === example.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Copied"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), " Copy example"] })
												})
											})
										]
									})
								}, example.label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "How to adapt these examples"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-4 list-decimal space-y-3 pl-5 text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Mirror the customer's language conceptually."
								}), " Show you understood what they meant, but don't repeat their exact phrasing back at them."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Pick one strength."
								}), " Choose the organization value that best matches their praise — quality, speed, support, personalization, or expertise."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Keep it human."
								}), " One or two short paragraphs are usually enough. Avoid jargon, emojis overload, or canned marketing language."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Invite, don't push."
								}), " \"We'd love to welcome you back\" is warmer than a direct upsell."] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold text-foreground",
								children: "Generate on-brand responses in seconds"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "Paste any customer communication into the Customer Response Assistant and get a warm, tailored reply that follows your approved messaging."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90",
										children: "Try the Customer Response Assistant"
									})
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 py-8 text-center text-sm text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Built by Aurics.AI: An AI-Native GTM Studio" })
			})
		]
	});
}
//#endregion
export { PositiveFeedbackGuide as component };
