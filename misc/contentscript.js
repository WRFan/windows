//console.error("HEADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD: " + (self == top));

new MutationObserver(function()
{
	function MyCSS()
	{
		arguments[0] = Document.prototype.querySelector.call(document, "style")

		//Object.prototype.__lookupSetter__.call(HTMLElement.prototype, "classList").call(document.head, document.location.hostname)

		arguments[0] = HTMLDocument.prototype.createElement.call(document, "style")

		DOMTokenList.prototype.add.call(arguments[0].classList, "WRFanStyle")

		Element.prototype.setAttribute.call(arguments[0], "WR_Done", 1)

		arguments[0].textContent = `

		/*############################################################################# Required !!! */
		::-webkit-scrollbar
		{
			width: 16px !important;

			height: 16px !important;

			position: static !important;
		}

		/*############################################################################# Hintergrund */
		::-webkit-scrollbar-track, ::-webkit-scrollbar-track-piece
		{
			background: #6666ff !important;

			border: initial !important;
		}

		 /*############################################################################# Bewegleiste */
		::-webkit-scrollbar-thumb
		{
			background-color: #663366 !important;

			border: 1px solid grey !important;

			border-radius: initial !important;
		}

		/*############################################################################# Prevent from changing */
		::-webkit-scrollbar-button
		{
			height: auto !important;

			width: auto !important;
		}

		/*############################################################################# button Up */
		::-webkit-scrollbar-button:vertical:start:decrement
		{
			background:
				linear-gradient(120deg, orange 40%, rgba(0, 0, 0, 0) 41%),
				linear-gradient(240deg, orange 40%, rgba(0, 0, 0, 0) 41%),
				linear-gradient(0deg, orange 30%, rgba(0, 0, 0, 0) 31%) !important; /* Arrow Hintergrund */

			background-color: white !important; /* arrow */
		}

		::-webkit-scrollbar-button:vertical:start:decrement:active
		{
			background-color: black !important; /* arrow */
		}

		/*############################################################################# button Down */
		::-webkit-scrollbar-button:vertical:end:increment
		{
			background:
				linear-gradient(300deg, orange 40%, rgba(0, 0, 0, 0) 41%),
				linear-gradient(60deg, orange 40%, rgba(0, 0, 0, 0) 41%),
				linear-gradient(180deg, orange 30%, rgba(0, 0, 0, 0) 31%) !important; /* Arrow Hintergrund */

			background-color: white !important; /* arrow */
		}

		::-webkit-scrollbar-button:vertical:end:increment:active
		{
			background-color: black !important; /* arrow */
		}

		/*############################################################################# button horizontal Links */
		::-webkit-scrollbar-button:horizontal:start:decrement
		{
			background:
				linear-gradient(30deg, orange 40%, rgba(0, 0, 0, 0) 41%),
				linear-gradient(150deg, orange 40%, rgba(0, 0, 0, 0) 41%),
				linear-gradient(270deg, orange 30%, rgba(0, 0, 0, 0) 31%) !important; /* Arrow Hintergrund */

			background-color: white !important; /* arrow */
		}

		::-webkit-scrollbar-button:horizontal:start:decrement:active
		{
			background-color: black !important; /* arrow */
		}

		/*############################################################################# button horizontal Rechts */
		::-webkit-scrollbar-button:horizontal:end:increment
		{
			background:
				linear-gradient(210deg, orange 40%, rgba(0, 0, 0, 0) 41%),
				linear-gradient(330deg, orange 40%, rgba(0, 0, 0, 0) 41%),
				linear-gradient(90deg, orange 30%, rgba(0, 0, 0, 0) 31%) !important; /* Arrow Hintergrund */

			background-color: white !important; /* arrow */
		}

		::-webkit-scrollbar-button:horizontal:end:increment:active
		{
			background-color: black !important; /* arrow */
		}

		/*############################################################################# double button disable */
		::-webkit-scrollbar-button:vertical:start:increment, ::-webkit-scrollbar-button:vertical:end:decrement, ::-webkit-scrollbar-button:horizontal:start:increment, ::-webkit-scrollbar-button:horizontal:end:decrement
		{
			display: none !important;
		}

		/*############################################################################# a */
		a[href]
		{
			color: rgb(0, 102, 204) !important;

			border: 0 !important;
		}

		a[href]:hover
		{
			text-decoration: underline !important;

			background-color: transparent;
		}

		a[href]:active
		{
			text-decoration: none !important;

			background-color: #33ffff !important;
		}

		a:link
		{
			text-decoration: none !important;
		}

		a:visited
		{
			text-decoration: none;

			color: purple !important;
		}

		/*############################################################################# sticky fixed */
		header, [class*="header"], [id*="header"], .is-stuck, .is-sticky, .sticky
		{
			position: static !important;
		}

		/*############################################################################# hidden */
		.back-to-top, #totop .cc-banner
		{
			display: none !important;
		}

		`

		// #############################################################################
		/*
		*
		{
			cursor: auto !important;
		}
		*/

		/*
		html, body
		{
			overflow: visible !important;
		}
		*/

		//#############################################################################
		/*
		header, [class*="header"], [id*="header"], .is-stuck, .is-sticky, .sticky,

		head[class="www.google.de"]+body .CvDJxb, head[class="stackoverflow.com"]+body .ps-fixed, head[class="superuser.com"]+body .ps-fixed, head[class="serverfault.com"]+body .ps-fixed, head[class="stackexchange.com"]+body .ps-fixed, head[class="askubuntu.com"]+body .ps-fixed, head[class="developer.mozilla.org"]+body .main-document-header-container, head[class*="tgstat."]+body .fixed-top, head[class="www.youtube.com"]+body #masthead-container, head[class="www.youtube.com"]+body #chips-wrapper, head[class="www.reddit.com"]+body .fixed, head[class="www.reddit.com"]+body .sticky, head[class="www.reddit.com"]+body .xs\\:sticky, head[class="chrome.google.com"]+body .O-j-k, head[class="microsoftedge.microsoft.com"]+body #headerArea, head[class="github.com"]+body .gBKNLX, head[class="techcommunity.microsoft.com"]+#lia-body .is-fixed, head[class="www.duden.de"]+body .tabloid__main-column-top--sticky, head[class="www.duden.de"]+body .tabloid__masthead--sticky, head[class="developer.mozilla.org"]+body #sidebar-quicklinks, head[class="developer.mozilla.org"]+body .toc-container, head[class*="www.vodafone.de"]+body .main-nav, head[class="bastyon.com"]+body .menuWrapper, head[class="www.mediamarkt.de"]+body .dkSbVj, head[class="www.mediamarkt.de"]+body .kXplyU
		{
			position: static !important;
		}

		head[class*="tgstat."]+body .content-page, head[class="rostec.ru"]+body
		{
			padding-top: 0px !important;
		}

		head[class*="tgstat."]+body #sticky-right-column__inner
		{
			position: static !important;

			transform: none !important;
		}

		head[class="www.youtube.com"]+body #page-manager
		{
			margin-top: auto !important;
		}

		head[class="www.youtube.com"]+body #guide-inner-content
		{
			margin-top: 45px !important;
		}

		head[class="www.google.de"]+body .CvDJxb
		{
			margin-top: 8px !important;

			margin-bottom: 5px !important;
		}

		head[class="developer.mozilla.org"]+body #sidebar-quicklinks, head[class="developer.mozilla.org"]+body .toc-container
		{
			display: block !important;

			-webkit-mask-image: none !important;

			overflow: visible !important;
		}

		head[class="www.google.de"]+body .RNNXgb
		{
			width: 815px !important;
		}

		head[class="www.berliner-zeitung.de"]+body
		{
			overflow-x: visible !important;
		}

		head[class="www.berliner-zeitung.de"]+body .mobile-slider--track, head[class="www.berliner-zeitung.de"]+body [class*="previews-slider_mobile-slider"]
		{
			width: auto !important;
		}

		head[class="www.berliner-zeitung.de"]+body .layout, head[class="www.berliner-zeitung.de"]+body .layout-wrapper--homepage, head[class="www.youtube.com"]+body #contentContainer
		{
			padding-top: 0px !important;
		}

		head[class="www.berliner-zeitung.de"]+body [class*="previews-slider_container"]
		{
			display: block !important;
		}

		head[class="www.berliner-zeitung.de"]+body [class*="previews-slider_container"]>.article-preview
		{
			flex-basis: auto !important;
		}

		head[class="www.berliner-zeitung.de"]+body .twitter-tweet
		{
			background-color: bisque !important;
		}

		head[class="www.youtube.com"]+body tp-yt-app-header
		{
			transform: translate3d(0px, 0px, 0px) !important;

			margin-top: auto !important;
		}

		head[class="www.youtube.com"]+body #links-holder
		{
			height: auto !important;
		}

		head[class="www.youtube.com"]+body #channel-header-container
		{
			display: block !important;

			height: auto !important;

			margin-left: 8px !important;

			padding-top: 0px !important;
		}

		head[class="www.youtube.com"]+body #channel-header
		{
			padding: 0px !important;
		}

		head[class="addons.opera.com"]+body #page-wrapper
		{
			max-width: none !important;
		}

		head[class*=".livejournal.com"]+body, head[class="stackoverflow.com"]+body
		{
			padding-top: 0px !important;
		}

		head[class="stackoverflow.com"]+body #content
		{
			max-width: none !important;

			width: auto !important;
		}

		head[class*=".livejournal.com"]+body .s-header-item--has-sub:after
		{
			position: static !important;
		}

		head[class="developer.chrome.com"]+body img
		{
			filter: none !important;
		}

		head[class="www.amazon.de"]+body .a-popover-no-header
		{
			position: absolute !important;
		}

		head[class="bastyon.com"]+body .vjs-paused>.vjs-icon-placeholder:before, head[class="bastyon.com"]+body .vjs-big-play-button>.vjs-icon-placeholder:before
		{
			content: "▶" !important; // ▶️
		}

		head[class="bastyon.com"]+body .vjs-playing>.vjs-icon-placeholder:before
		{
			content: "⏸" !important; // ⏸️ + ▌▌
		}

		head[class="bastyon.com"]+body .vjs-mute-control>.vjs-icon-placeholder:before
		{
			content: "🔇" !important;
		}

		head[class="bastyon.com"]+body .vjs-settings>.vjs-icon-placeholder:before
		{
			content: "⚙" !important;
		}

		head[class="bastyon.com"]+body .vjs-fullscreen-control>.vjs-icon-placeholder:before
		{
			content: "🗖" !important;
		}

		head[class="www.youtube.com"]+body [aria-label="Settings"] yt-icon, head[class="www.youtube.com"]+body [aria-label="More options"] yt-icon, head[class="www.youtube.com"]+body #guide-icon, head[class="www.youtube.com"]+body #search-clear-button yt-icon
		{
			background-color: lightblue !important;
		}

		head[class="www.youtube.com"]+body #search-form>.ytd-searchbox, head[class="www.youtube.com"]+body ytd-searchbox
		{
			margin-left: auto !important;

			padding-left: 0px !important;

			display: block !important;

			border: none !important;

			padding: 0px !important;

			box-shadow: none !important;
		}

		head[class="www.youtube.com"]+body #search-input>#search
		{
			border-bottom-color: rgb(118, 118, 118) !important;
			border-bottom-style: inset !important;
			border-bottom-width: 2px !important;
			border-image-outset: 0 !important;
			border-image-repeat: stretch !important;
			border-image-slice: 100% !important;
			border-image-source: none !important;
			border-image-width: 1 !important;
			border-left-color: rgb(118, 118, 118) !important;
			border-left-style: inset !important;
			border-left-width: 2px !important;
			border-right-color: rgb(118, 118, 118) !important;
			border-right-style: inset !important;
			border-right-width: 2px !important;
			border-top-color: rgb(118, 118, 118) !important;
			border-top-style: inset !important;
			border-top-width: 2px !important;

			padding-bottom: 1px !important;
			padding-left: 2px !important;
			padding-right: 2px !important;
			padding-top: 1px !important;

			line-height: normal !important;

			width: 1181px !important;
		}

		head[class="www.youtube.com"]+body #container.ytd-masthead
		{
			height: auto !important;

			padding: 0px !important;

			justify-content: initial;
		}

		head[class="www.youtube.com"]+body #search-form
		{
			height: auto !important;
		}

		head[class="www.youtube.com"]+body #end.ytd-masthead
		{
			min-width: auto !important;

			position: absolute !important;

			right: 0px !important;
		}

		head[class="www.youtube.com"]+body #search-clear-button
		{
			display: block !important;

			height: auto !important;

			width: auto !important;

			position: absolute !important;

			right: -5px !important;

			top: 0px !important;
		}

		head[class="www.youtube.com"]+body .yt-spec-button-shape-next--icon-only-default
		{
			height: auto !important;
		}

		.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover, yt-icon-button:hover
		{
			background-color: transparent !important;
		}

		ytd-topbar-menu-button-renderer
		{
			margin-right: auto !important;
		}

		head[class="rostec.ru"]+body .news-item h3
		{
			overflow: visible !important;
		}

		head[class="erkiss.live"]+body #image, head[class="erkiss.live"]+body #preview>#images
		{
			cursor: auto !important;
		}

		head[class="erkiss.live"]+body #img
		{
			bottom: 30px !important;
		}

		head[class="erkiss.live"]+body #progress
		{
			height: 8px !important;
		}

		head[class="erkiss.live"]+body #progress>span:last-child
		{
			width: 100% !important;
		}

		head[class="erkiss.live"]+body #progress *
		{
			cursor: pointer !important;
		}

		head[class="github.com"]+body .ePiodO
		{
			position: static !important;
		}

		.back-to-top, #totop .cc-banner,

		img[src*="gravatar.com"], img[src*="i.stack.imgur.com"], head[class="developer.mozilla.org"]+body .top-banner, head[class="developer.mozilla.org"]+body section.place, head[class*="tgstat."]+body .slick-slider, head[class="www.youtube.com"]+body #masthead-ad, head[class="github.com"]+body .gh-header-shadow, head[class="source.chromium.org"]+body .cdk-overlay-pane, head[class="developer.chrome.com"]+body announcement-banner, head[class="chrome.google.com"]+body .a-La, head[class="www.google.de"]+body .dodTBe, head[class="www.google.de"]+body .UUbT9, head[class="serverfault.com"]+body .js-consent-banner, head[class="stackexchange.com"]+body .js-consent-banner, head[class="stackoverflow.com"]+body .js-consent-banner, head[class="askubuntu.com"]+body .js-consent-banner, head[class="www.duden.de"]+body .tabloid__side-column, head[class="www.duden.de"]+body .tile__wrapper, head[class="www.duden.de"]+body #block-numero-teasercontent-right, head[class="www.duden.de"]+body .tabloid__insert-cellotape, head[class="rutube.ru"]+body .notification-module__infoNotifications, head[class="rutube.ru"]+body .eu-cookie-popup, head[class="www.berliner-zeitung.de"]+body [class*="ad-slot_"], head[class="www.berliner-zeitung.de"]+body [class*="traffective"], head[class="www.berliner-zeitung.de"]+body [id*="traffective"], head[class="www.berliner-zeitung.de"]+body [class*="article_billboard-"], head[class="www.berliner-zeitung.de"]+body [class*="desktop-top-bar_top__"], head[class="www.berliner-zeitung.de"]+body iframe, head[class="www.berliner-zeitung.de"]+body [class*="article_article-footer__"], head[class="www.berliner-zeitung.de"]+body [class*="article_teasers__"], head[class="www.berliner-zeitung.de"]+body [class*="infobox_infobox__"], head[class="www.berliner-zeitung.de"]+body [class*="articlepreviewfooter_menu__"], head[class="www.berliner-zeitung.de"]+body [class*="article_teaser"], head[class="www.youtube.com"]+body .banner-visible-area, head[class="ru.wikipedia.org"]+body #siteNotice, head[class="de.wikipedia.org"]+body #siteNotice, head[class="en.wikipedia.org"]+body #siteNotice, head[class="addons.opera.com"]+body #overlay, head[class="stackoverflow.com"]+body #newsletter-ad, head[class="www.youtube.com"]+body tp-yt-paper-dialog, head[class*=".livejournal.com"]+body .j-user-subscribe-btn, head[class*=".livejournal.com"]+body .user-pic, head[class*=".livejournal.com"]+body .user-icon, head[class*=".livejournal.com"]+body .aentry-head__userpic, head[class*=".livejournal.com"]+body .b-discoverytimes-wrapper, head[class="www.youtube.com"]+body #hover-overlays, head[class="stackoverflow.com"]+body #left-sidebar, head[class="www.google.de"]+body [data-text-ad], head[class="www.youtube.com"]+body #avatar, head[class="www.youtube.com"]+body #inner-header-container>#buttons, head[class="www.youtube.com"]+body .branding-img-container, head[class="www.youtube.com"]+body ytd-app[masthead-hidden] #masthead-container, head[class="support.microsoft.com"]+body #supWrapperToPreventFeedbackFlickering, head[class="www.amazon.de"]+body #nav-flyout-anchor, head[class="www.amazon.de"]+body #percolate-ui-ilm_div, head[class="www.amazon.de"]+body .cr-vote, head[class="www.amazon.de"]+body [data-cr-popup*="ReportAbuse"], head[class="www.amazon.de"]+body #nav-cover, head[class="www.amazon.de"]+body .AdHolder, head[class="www.amazon.de"]+body .sbv-product, head[class="www.amazon.de"]+body .sbv-video-container, head[class="www.amazon.de"]+body [class*="FEATURED_ASINS_LIST"], head[class="www.amazon.de"]+body iframe, head[class="www.amazon.de"]+body #similarities_feature_div, head[class="www.amazon.de"]+body #sims-themis-sponsored-products-2_feature_div, head[class="www.amazon.de"]+body #discovery-and-inspiration_feature_div, head[class="www.amazon.de"]+body .cr-summarization-lighthut, head[class="www.amazon.de"]+body .copilot-secure-display, head[class="www.amazon.de"]+body #gridgetWrapper, head[class="www.amazon.de"]+body #issuancePriceblockAmabot_feature_div, head[class="www.amazon.de"]+body #sellYoursHere_feature_div, head[class="www.amazon.de"]+body #simpleBundleV2_feature_div, head[class="www.youtube.com"]+body yt-tooltip-renderer, head[class="www.youtube.com"]+body [aria-label="Share"], head[class="www.youtube.com"]+body [aria-label="More actions"], head[class*="www.vodafone.de"]+body .mod-anchortop, head[class="www.kabeluser.de"]+body .u-scrollButtons, head[class="www.kabeluser.de"]+body .tooltip, head[class="www.spiegel.de"]+body [data-area="related_articles"], head[class="www.spiegel.de"]+body header.sticky, head[class="www.spiegel.de"]+body #feature-bar, head[class="bastyon.com"]+body #splashScreen, head[class="bastyon.com"]+body .vjs-picture-in-picture-control, head[class="bastyon.com"]+body [class*="shadow-popup-"], head[class="bastyon.com"]+body .pocketnet-logo-video-player, head[class="www.reddit.com"]+body shreddit-comments-page-ad, head[class="www.google.de"]+body .t4wgMc, head[class="www.youtube.com"]+body yt-icon-button#show-more, head[class="www.youtube.com"]+body ytd-ad-slot-renderer, head[class="www.youtube.com"]+body #subscribe-button, head[class="www.youtube.com"]+body .ytp-miniplayer-button, head[class="www.youtube.com"]+body #voice-search-button, head[class="www.google.de"]+body #bres, head[class="www.youtube.com"]+body #panel-pages, head[class="www.youtube.com"]+body yt-live-chat-viewer-engagement-message-renderer, head[class="www.youtube.com"]+body paper-ripple, head[class="www.youtube.com"]+body ytd-topbar-logo-renderer, head[class="rutube.ru"]+body .pen-feed-banner__image, head[class="www.youtube.com"]+body #search-icon-legacy, head[class="www.youtube.com"]+body [aria-label="Sign in"], head[class="www.youtube.com"]+body tp-yt-paper-tooltip, head[class="www.youtube.com"]+body yt-touch-feedback-shape, head[class="forum.vodafone.de"]+body #unknown_forum_desktop_tagcloud, head[class="www.youtube.com"]+body #reply-button-end, head[class="www.youtube.com"]+body #simple-box, head[class="www.chromium.org"]+body #cookieBar, head[class="www.google.de"]+body g-loading-icon, head[class="www.google.de"]+body .KFFQ0c, head[class="www.youtube.com"]+body #segmented-dislike-button, head[class="www.google.de"]+body #assistive-chips, head[class="www.google.de"]+body #passive-assist, head[class="rostec.ru"]+body .cookie, head[class="rostec.ru"]+body .b-first, head[class="forums.malwarebytes.com"]+body #elGuestTerms, head[class="www.thewindowsclub.com"]+body .ezmob-footer
		{
			display: none !important;
		}
		*/

		//setTimeout.call(self, function()
		//{
			//Node.prototype.appendChild.call(document.head, arguments[0])

			//console.error("CSS_START: " + document.documentElement.firstChild)

			Node.prototype.insertBefore.call(document.documentElement, arguments[0], document.documentElement.firstChild)

			//console.error("CSS_DONE: " + document.documentElement.firstChild)

		//}, 0, arguments[0])
	}

	/*
		arguments[0] -> object to work with

		arguments[1] -> attributes to remove
	*/
	function CleanMe(Args1, Args2)
	{
		if (Element.prototype.hasAttribute.call(Args1, "WR_Done"))
		{
			//console.error("DONE: ", Args1)

			return
		}

		Array.prototype.forEach.call(arguments[1], function()
		{
			//Element.prototype.removeAttribute.call(Args1, arguments[0])

			if (!!Element.prototype.getAttribute.call(Args1, arguments[0]))
			{
				Element.prototype.setAttribute.call(Args1, arguments[0], String())

				Element.prototype.setAttribute.call(Args1, "WR_Done", 1)
			}
		})

		//console.error("SET: ", Args1)
	}

	MyCSS.aWorkArray = Array()

	Array.prototype.forEach.call(arguments[0], function() // two changes during same frame
	{
		if (arguments[0].removedNodes.length)
		{
			Array.prototype.find.call(arguments[0].removedNodes, function()
			{
				if (Object.prototype.toString.call(arguments[0]) == "[object HTMLStyleElement]" && arguments[0].className == "WRFanStyle")
				{
					//console.error("KILLED: ", Object.prototype.toString.call(arguments[0]))

					MyCSS()

					return true
				}
			})

			return
		}

		MyCSS.aWorkArray[0] = arguments[0].type

		arguments[3] = arguments[0].type == "attributes" ? Array(arguments[0].target) : arguments[0].addedNodes

		Array.prototype.forEach.call(arguments[3], function() // several addedNodes during same frame
		{
			if (!arguments[0].hasAttribute || Element.prototype.hasAttribute.call(arguments[0], "WR_Done"))
			{
				//console.error(arguments[0])

				//console.error(Object.prototype.toString.call(arguments[0]))

				return
			}

			if (MyCSS.aWorkArray[0] == "childList" && Object.prototype.toString.call(arguments[0]) == "[object HTMLHeadElement]") // childList (addedNodes) check !!!
			{
				MyCSS()

				return
			}

			return // my1

			if (Object.prototype.toString.call(arguments[0]) == "[object HTMLLinkElement]" && Element.prototype.getAttribute.call(arguments[0], "rel") == "manifest")
			{
				Element.prototype.remove.call(arguments[0])

				//console.error("KILLEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD: ", arguments[0])

				return
			}

			if (Object.prototype.toString.call(arguments[0]) == "[object HTMLImageElement]")
			{
				CleanMe(arguments[0], ["alt"])

				return
			}

			if (Object.prototype.toString.call(arguments[0]) == "[object HTMLInputElement]")
			{
				CleanMe(arguments[0], ["placeholder"])

				return
			}

			if (!!Element.prototype.getAttribute.call(arguments[0], "title")) // HTMLAnchorElement + HTMLSpanElement
			{
				CleanMe(arguments[0], ["title"]) // ping

				return
			}

			if (Object.prototype.toString.call(arguments[0]) == "[object HTMLScriptElement]" && !Object.is(String.prototype.indexOf.call(location.host, "livejournal.com"), -1))
			{
				Element.prototype.remove.call(arguments[0])

				return
			}

			if (document.readyState == "complete" && MyCSS.aWorkArray[0] == "childList" && Object.prototype.toString.call(arguments[0]) == "[object HTMLDivElement]")
			{
				arguments[3] = Element.prototype.querySelectorAll.call(arguments[0], "img")

				Array.prototype.forEach.call(arguments[3], function()
				{
					CleanMe(arguments[0], ["alt"])
				})

				//-----------------------------------------------------------------
				arguments[3] = Element.prototype.querySelectorAll.call(arguments[0], "a")

				Array.prototype.forEach.call(arguments[3], function()
				{
					//console.error(arguments[0])

					CleanMe(arguments[0], ["title"])
				})

				//-----------------------------------------------------------------
				arguments[3] = Element.prototype.querySelectorAll.call(arguments[0], "input")

				Array.prototype.forEach.call(arguments[3], function()
				{
					CleanMe(arguments[0], ["placeholder"])
				})
			}
		})
	})
}).observe(document,
{
	attributes: true,
	subtree: true,
	childList: true
})