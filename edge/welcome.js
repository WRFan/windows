// devtools://devtools/bundled/panels/welcome/welcome.js

// resource -> 60741

import
{
	InspectorFrontendHostInstance as e,
	userMetrics as t,
	learnerCohortUMA as n,
	isUnderTest as o
}
from "../../core/host/host.js";
import
{
	Settings$1 as i,
	debounce as l
}
from "../../core/common/common.js";
import
{
	Runtime$1 as s
}
from "../../core/root/root.js";
import
{
	ActionRegistry$1 as a,
	Panel$1 as r,
	ViewManager$1 as c
}
from "../../ui/legacy/legacy.js";
import
{
	registerUIStrings as d,
	getLazilyComputedLocalizedString as m,
	DevToolsLocale$1 as h,
	updateLocaleData as u,
	getLocalizedString as g
}
from "../../core/i18n/i18n.js";
import
{
	defineComponent as p
}
from "../../ui/components/helpers/helpers.js";
import
{
	Icon$1 as f
}
from "../../ui/components/icon_button/icon_button.js";
import
{
	SettingCheckbox$1 as w
}
from "../../ui/components/settings/settings.js";
import
{
	literal as k,
	html as v
}
from "../../ui/lit-html/lit-html.js";
import
{
	MicroFeedback$1 as b
}
from "../../ui/components/micro_feedback/micro_feedback.js";
import
{
	R as y,
	render as T,
	nothing as D
}
from "../../third_party/lit/lit.js";
let x, A;
class $
{
	handleAction(t, n)
	{
		return e.openInNewTab("https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/whats-new/whats-new"),
			!0
	}
	static instance(e = {
		forceNew: null
	})
	{
		const
		{
			forceNew: t
		} = e;
		return x && !t || (x = new $),
			x
	}
}
class S
{
	handleAction(t, n)
	{
		return e.recordUserMetricsAction("Microsoft.SendASmile.DevTools"),
			e.openSendFeedbackDialog(),
			!0
	}
	static instance(e = {
		forceNew: null
	})
	{
		const
		{
			forceNew: t
		} = e;
		return A && !t || (A = new S),
			A
	}
}
var L = Object.freeze(
{
	__proto__: null,
	ReleaseNotesActionDelegate: $,
	ReportIssueActionDelegate: S
});
const N = {
		highlightsFromTheLatestMicrosoft: "What's New in DevTools (Microsoft Edge 99)",
		edgeAnnouncement1: "Debug JavaScript with source maps easily",
		edgeAnnouncement1Description: "Publish your source maps to Azure Artifacts Symbol Server for an easier debugging experience in DevTools.",
		edgeAnnouncement2: "Debug your ASP.NET projects in Visual Studio with DevTools",
		edgeAnnouncement2Description: "Get the Microsoft Edge Developer Tools extension for VS today!",
		edgeAnnouncement3: "Analyze layers in the 3D View tool to improve the rendering performance of your webpage",
		edgeAnnouncement3Description: "The Layers tool isn't going away - find it in the 3D View tool today.",
		edgeAnnouncement4: "The Performance tool now displays unminified function names in the flame chart",
		edgeAnnouncement4Description: "Use the new Unminify button in the Performance tool to download an unminified version of the performance profile you recorded.",
		edgeAnnouncement5: "Improvements for using assistive technology with DevTools",
		edgeAnnouncement5Description: "Screen readers now announce better information in the Network Console and 3D View tools.",
		edgeAnnouncement6: "Fix: Sources tool > Page tab - simplified view of the source folders tree",
		edgeAnnouncement6Description: "The Page tab has been uncluttered by removing unneeded path prefixes and merging equivalent duplicate folders.",
		edgeDevToolsDocumentation: "`Microsoft Edge DevTools` documentation",
		devToolsOverview: "Overview of all tools",
		submitFeedback: "Send us feedback on GitHub",
		video: "Video: What's New in DevTools (Microsoft Edge 98)",
		helpLink5: "Detached Elements tool (NEW)",
		helpLink6: "Console overview",
		deviceEmulation: "Device Emulation",
		deviceEmulationDescription: "Open a UI that enables you to simulate mobile viewports and test responsive designs. Learn more or try it now by clicking the Device icon in the top left corner of `DevTools`.",
		customizeDevTools: "Customizing `DevTools`",
		customizeDevToolsDescription: "Change the `DevTools` theme, customize keyboard shortcuts, enable experiments, and more in the Settings menu. Learn more or try it now by clicking the Settings icon in the top right corner of `DevTools`."
	},
	C = d("panels/welcome/ReleaseNotes.ts", N),
	E = m.bind(void 0, C),
	F = [
	{
		version: 37,
		header: E(N.highlightsFromTheLatestMicrosoft),
		highlightsEdge: [
		{
			title: E(N.edgeAnnouncement1),
			subtitle: E(N.edgeAnnouncement1Description),
			link: "https://go.microsoft.com/fwlink/?linkid=2189617"
		},
		{
			title: E(N.edgeAnnouncement2),
			subtitle: E(N.edgeAnnouncement2Description),
			link: "https://go.microsoft.com/fwlink/?linkid=2189618"
		},
		{
			title: E(N.edgeAnnouncement3),
			subtitle: E(N.edgeAnnouncement3Description),
			link: "https://go.microsoft.com/fwlink/?linkid=2189619"
		},
		{
			title: E(N.edgeAnnouncement4),
			subtitle: E(N.edgeAnnouncement4Description),
			link: "https://go.microsoft.com/fwlink/?linkid=2189620"
		},
		{
			title: E(N.edgeAnnouncement5),
			subtitle: E(N.edgeAnnouncement5Description),
			link: "https://go.microsoft.com/fwlink/?linkid=2189621"
		},
		{
			title: E(N.edgeAnnouncement6),
			subtitle: E(N.edgeAnnouncement6Description),
			link: "https://go.microsoft.com/fwlink/?linkid=2189622"
		}],
		highlights: [],
		help: [
		{
			title: E(N.edgeDevToolsDocumentation),
			link: "https://go.microsoft.com/fwlink/?linkid=2190021"
		},
		{
			title: E(N.devToolsOverview),
			link: "https://go.microsoft.com/fwlink/?linkid=2189938"
		},
		{
			title: E(N.submitFeedback),
			link: "https://go.microsoft.com/fwlink/?linkid=2190022"
		},
		{
			title: E(N.video),
			link: "https://go.microsoft.com/fwlink/?linkid=2189472"
		},
		{
			title: E(N.helpLink5),
			link: "https://go.microsoft.com/fwlink/?linkid=2189473",
			cloudKey: "whatsNewMinusOne"
		},
		{
			title: E(N.helpLink6),
			link: "https://go.microsoft.com/fwlink/?linkid=2190560",
			cloudKey: "whatsNewMinusTwo"
		}],
		learnMore: [
		{
			title: E(N.deviceEmulation),
			subtitle: E(N.deviceEmulationDescription),
			link: ""
		},
		{
			title: E(N.customizeDevTools),
			subtitle: E(N.customizeDevToolsDescription),
			link: ""
		}],
		link: "https://go.microsoft.com/fwlink/?linkid=2189471"
	}];

// my1.e
const I = navigator.userAgentData ?. brands ?. find((e => "Microsoft Edge" === e.brand)) ?. version || "93"; // navigator.userAgentData.brands[1].version == 115

let M;
async function z(e) // my1.d
{
	let t = `https://devtools.azureedge.net/docs/${I}`;

	if (!!s.queryParam("e2etest"))
	{
		t = "/test/e2e/resources/welcome";
	}
	else
	{
		const e = s.queryParam("welcomeUrlBase");

		e && (t = e)
	}

	return `${t}/${e}`
}

const V = async () => // my1.c
{
	//t.welcomeActionTaken(0)

	t.welcomeActionTaken(2)

	return undefined

	try
	{
		const e = await async function()
		{
			if (s.queryParam("e2etest") && "noPop" === window.localStorage.getItem("customTestJson"))
			{
				return z("stable_no_pop.json");
			}

			return z("stable.json")
		}();

		/*
			devtools://devtools/bundled/core/host/host.js

			welcomeActionTaken(e)
			{
				H.recordEnumeratedHistogram(h.WelcomeAction, e, 7)
			}
		*/
		t.welcomeActionTaken(0)

		//console.log("FFFFFFFFFFFFFFFFFFFFFFF: " + 1)

		const n = performance.now(),
			o = async function(e)
			{
				return new Promise((async (t, n) =>
				{
					try
					{
						const n = await fetch(e,
						{
							mode: "cors"
						});
						t(await n.json())
					}
					catch (e)
					{
						n(e)
					}
				}))
			}(e), l = new Promise(((e, t) => setTimeout((() => t(new Error("Timed out fetching the release notes"))), 5e3))), a = await Promise.race([l, o]);

		if (t.welcomeRequestTime(performance.now() - n), !a)
		{
			//console.log("FFFFFFFFFFFFFFFFFFFFFFF: " + 2)

			throw a; // throws here
		}

		//console.log("FFFFFFFFFFFFFFFFFFFFFFF: " + 3)

		return t.welcomeActionTaken(1),
			t.welcomeBytesReceived(a),
			(e =>
			{
				i.instance().createSetting("cloudReleaseNotes",
				{
					...e
				}).set(
				{
					...e
				})
			})(a),
			a
	}
	catch (e)
	{
		t.welcomeActionTaken(2) // caught here

		//console.log("FFFFFFFFFFFFFFFFFFFFFFF: " + 5)

		const n = i.instance().createSetting("cloudReleaseNotes", void 0).get(); // undefined

		//console.log("AAAAAAAAAAAAAAAAAAAAA: " + (typeof n))

		//console.log("BBBBBBBBBBBBBBBBBBB: " + t.welcomeActionTaken)

		return n || void 0
	}
},

P = new CSSStyleSheet;
P.replaceSync("/*\n * Copyright (C) Microsoft Corporation. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.welcome {\n  overflow: auto;\n}\n\n.loading-container {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\n");
const W = new CSSStyleSheet;
W.replaceSync("/*\n * Copyright (C) Microsoft Corporation. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.main-container {\n  --grid-template-columns: 1fr 1fr;\n  --header-grid-column: 1 / 2;\n  --help-grid-column: 1 / 2;\n  --help-grid-row-start: 2;\n  --highlights-grid-column: 2 / 3;\n  --highlights-chromium-grid-column: 2 / 3;\n  --highlights-grid-row-start: 1;\n\n  display: grid;\n  gap: 20px;\n  padding: 24px;\n  grid-template-columns: var(--grid-template-columns);\n  grid-auto-rows: minmax(min-content, max-content);\n}\n\n/* Narrow and medium layouts have identical grid properties. */\n.main-container.responsive-narrow-container,\n.main-container.responsive-medium-container {\n  --grid-template-columns: 1fr;\n  --header-grid-column: 1 / 2;\n  --help-grid-column: 1 / 2;\n  --help-grid-row-start: 2;\n  --highlights-grid-column: 1 / 2;\n  --highlights-chromium-grid-column: 1 / 2;\n  --highlights-grid-row-start: 4;\n}\n\n.welcome-header {\n  grid-column: var(--header-grid-column);\n}\n\n.welcome-header h1 {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.highlights-container {\n  min-height: fit-content;\n  grid-row-start: var(--highlights-grid-row-start);\n  /* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */\n  grid-row-end: 6;\n  grid-column: var(--highlights-grid-column);\n}\n\n.highlights-chrome-container {\n  grid-column: var(--highlights-chromium-grid-column);\n}\n\n.help-links-container {\n  grid-column: var(--help-grid-column);\n  grid-row-start: var(--help-grid-row-start);\n  margin-top: -16px;\n}\n\n.welcome-list-container h2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.devtools-link,\n.devtools-link:visited {\n  color: var(--accent-foreground-rest);\n  text-decoration: none;\n}\n\n.devtools-link:hover {\n  color: var(--accent-foreground-hover);\n  text-decoration: none;\n}\n\n.devtools-link:active {\n  color: var(--accent-foreground-active);\n  text-decoration: none;\n}\n\n.more-link-container {\n  font-size: 1.2em;\n  white-space: nowrap;\n}\n\n.more-link-container:hover,\n.more-link-container:active {\n  text-decoration: underline;\n}\n\n.title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 8px;\n  flex-wrap: wrap;\n}\n\n");
const U = new CSSStyleSheet;
U.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Copyright (C) Microsoft Corporation. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\nul {\n  list-style: none;\n  display: grid;\n  padding: 0;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\nul.matched-item-heights {\n  grid-auto-rows: 1fr;\n}\n\nul.double-columns {\n  grid-template-columns: 1fr 1fr;\n}\n\nul li {\n  font-size: 14px;\n  width: 100%;\n  height: 100%;\n}\n\nul li a {\n  line-height: 20px;\n  display: block;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.welcome-list-item {\n  padding: 10px 16px;\n  line-height: 20px;\n  font-size: 14px;\n  text-decoration: none;\n  color: var(--neutral-foreground-hint);\n  display: flex;\n}\n\n.welcome-list-item h3 {\n  font-size: 14px;\n  margin: 0;\n  font-weight: normal;\n  color: var(--accent-foreground-rest);\n}\n\n.message {\n  margin-top: 4px;\n}\n\n.devtools-link,\n.devtools-link:visited {\n  color: var(--accent-foreground-rest);\n  text-decoration: none;\n}\n\n.devtools-link:hover {\n  color: var(--accent-foreground-hover);\n  text-decoration: none;\n}\n\n.devtools-link:active {\n  color: var(--accent-foreground-active);\n  text-decoration: none;\n}\n\n.devtools-help-link,\n.welcome-list-item {\n  border-radius: 4px;\n  background: var(--neutral-fill-stealth-rest);\n  border: 1px solid var(--neutral-outline-rest);\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.devtools-help-link {\n  text-decoration: none;\n  color: var(--neutral-foreground-rest);\n  padding: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.devtools-help-link:hover,\n.welcome-list-item:hover {\n  text-decoration: none;\n  background: var(--neutral-fill-stealth-hover);\n  border-color: var(--neutral-outline-hover);\n}\n\n.devtools-help-link:active,\n.welcome-list-item:active {\n  text-decoration: none;\n  background: var(--neutral-fill-stealth-active);\n}\n\n.devtools-help-link:focus,\n.welcome-list-item:focus {\n  text-decoration: none;\n  background: var(--neutral-fill-stealth-selected);\n}\n\n.devtools-help-link span {\n  margin-left: 12px;\n}\n\n.show-more-button {\n  font-size: 14px;\n  color: var(--accent-foreground-rest);\n  cursor: pointer;\n  text-align: center;\n  width: 100%;\n  background: transparent;\n  border-width: 0;\n}\n\n.show-more-button:hover {\n  color: var(--accent-foreground-hover);\n}\n\n.show-more-button:active {\n  color: var(--accent-foreground-active);\n}\n\ndevtools-icon {\n  --icon-color: var(--accent-fill-rest);\n}\n\n.welcome-list-image {\n  margin-right: 20px;\n  height: 97px;\n  width: 170px;\n  object-fit: contain;\n  object-position: top;\n}\n\n@media (forced-colors: active) {\n  devtools-icon {\n    --icon-color: ButtonText;\n  }\n}\n\n");
const j = {
		hideLabel: "Hide",
		showMoreLabel: "Show more ({PH1} items)..."
	},
	H = d("panels/welcome/components/WhatsNewList.ts", j),
	_ = g.bind(void 0, H);
class R extends HTMLElement
{
	static litTagName = k `devtools-welcome-whatsnewlist`;

	#e = this.attachShadow(
	{
		mode: "open"
	});

	#t = {
		list: [],
		columns: 1,
		renderer: e => v ``
	};

	#n = !0;
	set data(e)
	{
		this.#n = !0,
			this.#t = e,
			this.#o()
	}
	get data()
	{
		return this.#t
	}
	connectedCallback()
	{
		this.#e.adoptedStyleSheets = [U]
	}

	#i = e =>
	{
		if (e.preventDefault(),
			this.#n = !this.#n,
			this.#o(),
			!this.#n && !e.pointerType)
		{
			const e = this.#t.truncatedCount;
			if (void 0 !== e)
			{
				Array.from(this.#e.querySelectorAll("li > *"))[e].focus()
			}
		}
	};

	#o()
	{
		const
		{
			list: e,
			columns: t,
			matchedItemHeights: n,
			renderer: o,
			truncatedCount: i = 0
		} = this.#t, l = (0 !== i && this.#n ? e.slice(0, i) : e).map((e => v `<li>${o(e)}</li>`)), s = e.length - i;
		let a = v ``;
		if (0 !== i && s > 0)
		{
			const e = this.#n ? _(j.showMoreLabel,
			{
				PH1: s
			}) : _(j.hideLabel);
			a = v `
        <button class="show-more-button" @click=${this.#i} tabindex="0">
          ${e}
        </button>`
		}
		const r = y(
			{
				"double-columns": 2 === t,
				"matched-item-heights": Boolean(n)
			}),
			c = v `
      <ul class=${r}>
        ${l}
      </ul>
      ${a}`;
		T(c, this.#e,
		{
			host: this
		})
	}
}
p("devtools-welcome-whatsnewlist", R);
const K = {
		helpTitle: "Learn",
		tabTitle: "Welcome to {PH1}",
		moreLinkTitle: "View all",
		chromiumHighlightsTitle: "Announcements from the `Chromium` project",
		microfeedbackFeedbackNessage: "Thank you! It will help us improve",
		microfeedbacklikePrompt: "Tell us what you like",
		microfeedbackldislikePrompt: "Help us improve",
		microfeedbackFeedbackLikeDocumentation: "I like the documentation links for beginners",
		microfeedbackFeedbackLikeTutorials: "I like the tutorials and task based documentation",
		microfeedbackFeedbackLikeDepth: "I like the in-depth documentation for each tool",
		microfeedbackFeedbackLikeUpdates: "I like the updates for each release (What's New)",
		microfeedbackFeedbackDislikeWelcome: "I don't like seeing Welcome after each update",
		microfeedbackFeedbackDislikeResources: "I want more help resources in DevTools",
		microfeedbackFeedbackDislikeDocumentation: "I want more documentation for getting started with DevTools",
		microfeedbackFeedbackDislikeTechnical: "I want more technical documentation",
		microfeedbackFeedbackWelcomeMessage: "Are you satisfied with Microsoft Edge Devtools Learning resources?"
	},
	B = d("panels/welcome/components/WelcomeView.ts", K),
	O = g.bind(void 0, B),
	q = {
		2:
		{
			containerClass: "",
			learn:
			{
				columns: 1
			},
			edge:
			{
				style: 0,
				columns: 1
			},
			chromium:
			{
				style: 0,
				columns: 1
			}
		},
		1:
		{
			containerClass: "responsive-medium-container",
			learn:
			{
				columns: 2,
				truncatedCount: 4
			},
			edge:
			{
				style: 0,
				columns: 1,
				truncatedCount: 5
			},
			chromium:
			{
				style: 1,
				columns: 1
			}
		},
		0:
		{
			containerClass: "responsive-narrow-container",
			learn:
			{
				columns: 1,
				truncatedCount: 4
			},
			edge:
			{
				style: 1,
				columns: 1
			},
			chromium:
			{
				style: 1,
				columns: 1
			}
		}
	};
class G extends HTMLElement
{
	static litTagName = k `devtools-welcome`;

	#e = this.attachShadow(
	{
		mode: "open"
	});

	#t = {};

	#l = 2;
	set data(e)
	{
		this.#t = e,
			this.#o()
	}
	get data()
	{
		return this.#t
	}
	set layout(e)
	{
		this.#l !== e && (this.#l = e,
			this.#o())
	}
	get layout()
	{
		return this.#l
	}
	connectedCallback()
	{
		this.#e.adoptedStyleSheets = [W]
	}
	enforceCapitalization(e)
	{
		return e.charAt(0).toUpperCase() + e.slice(1)
	}

	#s(o)
	{
		const
		{
			title: i,
			link: l,
			iconName: s
		} = o, r = v `
      <${f.litTagName}
        .data=${{
			iconName: s || "edge-documentation_book_filled",
			color: "--accent-fill-rest",
			width: "20px"
		}}>
      </${f.litTagName}>
      <span>${this.enforceCapitalization(i())}</span>`, c = o =>
		{
			t.welcomeActionTaken(3),
				o && o.pointerType && o.currentTarget.blur(),
				e.recordUserMetricsAction(n)
		};
		if (l.startsWith("action://"))
		{
			const e = e =>
			{
				e.preventDefault();
				const t = l.replace("action://", "");
				a.instance().action(t) ?. execute(),
					c(e)
			};
			return v `
        <a class="devtools-help-link" href=${l} @click=${e}>
          ${r}
        </a>`
		}
		return v `
      <a class="devtools-help-link" href=${l} target="_blank" @click=${c}>
        ${r}
      </a>`
	}

	#a()
	{
		const e = {
			itemId: 0,
			mfbPrompt: O(K.microfeedbackFeedbackWelcomeMessage),
			feedbackMessage: O(K.microfeedbackFeedbackNessage),
			followUpThumbsUp:
			{
				prompt: O(K.microfeedbacklikePrompt),
				options: [O(K.microfeedbackFeedbackLikeDocumentation), O(K.microfeedbackFeedbackLikeTutorials), O(K.microfeedbackFeedbackLikeDepth), O(K.microfeedbackFeedbackLikeUpdates)]
			},
			followUpThumbsDown:
			{
				prompt: O(K.microfeedbackldislikePrompt),
				options: [O(K.microfeedbackFeedbackDislikeWelcome), O(K.microfeedbackFeedbackDislikeResources), O(K.microfeedbackFeedbackDislikeDocumentation), O(K.microfeedbackFeedbackDislikeTechnical)]
			}
		};
		return v `
      <${b.litTagName}
        .data=${e}
      ></${b.litTagName}>`
	}

	#r(o, i)
	{
		const
		{
			title: l,
			subtitle: s,
			link: a,
			imageURL: r,
			imageAltText: c,
			isVideo: d
		} = i;
		return v `
      <a class="welcome-list-item" href=${a} target="_blank" @click=${o=>{
			d ? t.welcomeActionTaken(5) : t.welcomeActionTaken(4),
			e.recordUserMetricsAction(n),
			o.pointerType && o.currentTarget.blur()
		}
		}>
        ${r && (0 === o || d) ? v`<img class="welcome-list-image" src=${r} alt=${c}>` : D}
        <span class="welcome-list-text">
          <h3>${this.enforceCapitalization(l())}</h3>
          ${0 === o ? v`
            <p class="message">${this.enforceCapitalization(s())}</p>` : D}
        </span>
      </a>`
	}

	#o()
	{
		if (!this.#t.welcomeNote || !this.#t.setting)
			throw new Error("No welcome view data provided for rendering.");
		const
		{
			help: e,
			header: n,
			highlightsEdge: o,
			highlights: i,
			link: l,
			whatsNewVideo: s,
			learnHeader: a,
			allAnnouncementsLinkText: r
		} = this.#t.welcomeNote, c = q[this.#l], d = w.litTagName, m = {
			list: e.filter((e => !e.hidden)),
			matchedItemHeights: !0,
			columns: c.learn.columns,
			truncatedCount: c.learn.truncatedCount,
			renderer: e => this.#s(e)
		}, h = {
			list: (s && o ? [s, ...o] : o) || [],
			columns: c.edge.columns,
			truncatedCount: c.edge.truncatedCount,
			renderer: e => this.#r(c.edge.style, e)
		}, u = {
			list: i,
			columns: c.chromium.columns,
			truncatedCount: c.chromium.truncatedCount,
			renderer: e => this.#r(c.chromium.style, e)
		}, g = r ? r() : O(K.moreLinkTitle), p = `${n()}, ${g}`, f = v `
      <div class="main-container" class="main-container ${c.containerClass}" aria-labelledby="welcome-title">
        <div class="welcome-header">
          <h1 id="welcome-title">${O(K.tabTitle, {
			PH1: "Microsoft Edge DevTools"
		})}</h1>
          <${d}
            .data=${{
			setting: this.#t.setting
		}}>
          </${d}>
        </div>

        <nav class="welcome-list-container help-links-container" aria-labelledby="help-links-title">
          <div class="title-container">
            <h2 id="help-links-title">${a ? a() : O(K.helpTitle)}</h2>
            <div>${this.#a()}</div>
          </div>
          <${R.litTagName} .data=${m}></${R.litTagName}>
        </nav>

        <main class="welcome-list-container highlights-container" aria-labelledby="highlights-title">
          <div class="title-container">
            <h2 id="highlights-title">${n()}</h2>
            <div class="more-link-container">
              <a class="devtools-link" href=${l} target="_blank" @click=${()=>{
			t.welcomeActionTaken(6)
		}
		} aria-label=${p}>${g}</a>
            </div>
          </div>
          <${R.litTagName} .data=${h}></${R.litTagName}>
        </main>

        ${i.length > 0 ? v`
          <section class="welcome-list-container highlights-chrome-container" aria-labelledby="highlights-chrome-title">
            <div class="title-container">
              <h2 id="highlights-chrome-title">${O(K.chromiumHighlightsTitle)}</h2>
            </div>
            <${R.litTagName} .data=${u}></${R.litTagName}>
          </section>
        ` : D}
      </div>`;
		T(f, this.#e,
		{
			host: this
		})
	}
}
p("devtools-welcome", G);
let J, Q, X, Y = !1;
class Z extends r
{
	showWelcomeAfterUpdateSetting;
	welcomeViewElement;
	loadingElement;
	constructor()
	{
		super("welcome"),
			this.showWelcomeAfterUpdateSetting = i.instance().createSetting("welcome.show-welcome-tab", !0),
			this.createLoadingElement(),
			this.fetchReleaseNotesAndRender()
	}
	static instance()
	{
		return J || (J = new Z),
			J
	}
	wasShown()
	{
		this.registerCSSFiles([P])
	}
	onResize()
	{
		l((() =>
		{
			this.welcomeViewElement && (this.welcomeViewElement.layout = this.computeLayout())
		}), 400)()
	}
	computeLayout()
	{
		const e = this.element.offsetWidth;
		return e < 497 ? 0 : e > 497 && e < 699 ? 1 : 2
	}
	async fetchReleaseNotesAndRender()
	{
		Q || (Q = await V());
		const e = Q,
			t = ((!M || M.version < parseInt(I, 10)) && (M = F.reduce(((e, t) => t.version > e.version ? t : e))),
				M);
		if (!e)
			return void this.createWelcomeElement(t);
		const n = function(e)
			{
				const
				{
					localized: t,
					releaseNotes: n,
					header: o,
					whatsNewVideo: i,
					help: l = [],
					learnHeader: s,
					allAnnouncementsLinkText: a
				} = e, r = h.instance().locale;
				u(r, t[r in t ? r : "en-US"]);
				let c = n.reduce(((e, t) =>
				{
					const
					{
						title: n,
						subtitle: o,
						localizedAnnouncementKey: i
					} = t;
					return {
						...e,
						[i]: n,
						[i + "Description"]: o
					}
				}), N);
				if (c = l.reduce(((e, t) =>
					{
						const
						{
							title: n,
							localizedAnnouncementKey: o
						} = t;
						return {
							...e,
							[o]: n
						}
					}), c),
					i && i.title)
				{
					const
					{
						title: e,
						subtitle: t,
						localizedKey: n
					} = i;
					c = {
						...c,
						[n]: e,
						[n + "Description"]: t
					}
				}
				if (o && (c.highlightsFromTheLatestMicrosoft = o.title),
					s)
				{
					const
					{
						title: e,
						localizedKey: t
					} = s;
					c = {
						...c,
						[t]: e
					}
				}
				if (a)
				{
					const
					{
						title: e,
						localizedKey: t
					} = a;
					c = {
						...c,
						[t]: e
					}
				}
				const g = d("panels/welcome/ReleaseNotes.ts", c);
				return m.bind(void 0, g)
			}(e),
			{
				releaseNotes: o,
				viewAllLinkId: i,
				help: l = [],
				whatsNewVideo: s,
				learnHeader: a,
				allAnnouncementsLinkText: r
			} = e,
			c = await Promise.all(o.map((async e =>
			{
				const
				{
					linkId: t,
					title: o,
					subtitle: i,
					imageName: l,
					imageAltText: s
				} = e, a = {
					link: `https://go.microsoft.com/fwlink/?linkid=${t}`,
					title: n(o),
					subtitle: n(i)
				};
				return l && (a.imageURL = await z(l),
						a.imageAltText = s),
					a
			})));
		async function g(t)
		{
			return await Promise.all(t.map((async t =>
			{
				let o;
				if (e ?. edgeVersion)
					o = t;
				else
				{
					const
					{
						cloudKey: e
					} = t;
					o = l.find((t => t.localizedAnnouncementKey === e))
				}
				if (o)
				{
					const
					{
						linkId: e,
						title: t,
						iconName: i
					} = o, l = await async function(e)
					{
						let t;
						try
						{
							if (!e)
								return !1;
							t = new URL(`../../Images/${e}.svg`,
								import.meta.url).toString();
							return 200 === (await fetch(t)).status
						}
						catch (e)
						{
							return console.error(`Failed to fetch icon: ${t}\n ${e}`),
								null
						}
					}(i), s = i && l ? i : "edge-documentation_book_filled";
					return {
						link: `https://go.microsoft.com/fwlink/?linkid=${e}`,
						title: n(t),
						iconName: s
					}
				}
				return t
			})))
		}
		const p = e.edgeVersion ? await g(l) : await g(t.help),
			f = parseInt(e.edgeVersion || "0", 10) || 0,
			w = {
				...t,
				highlightsEdge: c,
				help: p,
				version: f
			};
		if (i && (w.link = `https://go.microsoft.com/fwlink/?linkid=${i}`),
			s && s.title)
		{
			const
			{
				title: e,
				subtitle: t,
				imageName: o,
				imageAltText: i,
				linkId: l
			} = s;
			w.whatsNewVideo = {
				title: n(e),
				subtitle: n(t),
				imageURL: await z(o),
				imageAltText: i,
				link: `https://www.youtube.com/watch?v=${l}`,
				isVideo: !0
			}
		}
		if (a)
		{
			const
			{
				title: e
			} = a;
			w.learnHeader = n(e)
		}
		if (r)
		{
			const
			{
				title: e
			} = r;
			w.allAnnouncementsLinkText = n(e)
		}
		this.createWelcomeElement(w)
	}
	createLoadingElement()
	{
		this.loadingElement = document.createElement("div"),
			this.loadingElement.classList.add("loading-container"),
			this.loadingElement.createChild("div", "spinner"),
			this.contentElement.appendChild(this.loadingElement)
	}
	createWelcomeElement(e)
	{
		this.loadingElement ?. classList.add("hide"),
			this.welcomeViewElement = new G,
			this.welcomeViewElement.data = {
				welcomeNote: e,
				setting: this.showWelcomeAfterUpdateSetting
			},
			this.welcomeViewElement.layout = this.computeLayout(),
			this.contentElement.appendChild(this.welcomeViewElement),
			t.welcomePanelLoaded(Y)
	}
}

async function ee() // my1.b <- from my1.a
{
	Q = await V(); // undefined

	//console.log("CCCCCCCCCCCCCCCCCCCCCCCC: " + Q)

	const e = i.instance().createSetting("releaseNoteVersionSeen", 0),

	t = e.get(),

	n = i.instance().moduleSetting("welcome.show-welcome-tab").get(),

	o = parseInt(Q ?. edgeVersion || "0", 10),

	l = s.queryParam("panel"),

	a = Boolean(Q ?. shouldOpenWelcome);

	if (t)
	{
		if (n && !(t >= o) && a)
		{
			if (Y = !0, e.set(o), l)
			{
				const e = c.instance().locationNameForViewId("welcome");

				await c.instance().showViewInLocation("welcome", e, !1)
			}
			else
			{
				c.instance().showView("welcome", !0)
			}
		}
	}
	else
	{
		e.set(o)
	}
}

class te
{
	static instance()
	{
		return X || (X = new te),
			X
	}
	async run()
	{
		/*
			ee -> my1.b
		*/
		o() || ee() // my1.a
	}
}
var ne = Object.freeze(
{
	__proto__: null,
	WelcomePanel: Z,
	showWelcomeIfNeeded: ee,
	WelcomeLateInitialization: te
});
export
{
	L as ActionDelegate, ne as WelcomePanel
};
//# sourceMappingURL=welcome.js.map