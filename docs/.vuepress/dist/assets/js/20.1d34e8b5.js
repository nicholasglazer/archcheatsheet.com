(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{35:function(e,t,a){"use strict";a.r(t);var r=a(2),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"power-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-management","aria-hidden":"true"}},[e._v("#")]),e._v(" Power management")]),e._v(" "),a("p",[a("a",{attrs:{id:"Power_management"}})]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you configuring your laptop PM for the first time, I would recommend to read arch wiki "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Power_management",target:"_blank",rel:"noopener noreferrer"}},[e._v("power management"),a("OutboundLink")],1),e._v(" article to understand the main concepts.")])]),e._v(" "),a("p",[e._v("It could be very confusing to pick from a variety of power management tools. Here I'll briefly cover their relation to each other.")]),e._v(" "),a("p",[e._v("Most of the packages are for the laptops, but still may want "),a("a",{attrs:{href:"#diagnosing-tools"}},[e._v("#diagnosing tools")]),e._v(" or different native "),a("a",{attrs:{href:"#systemd-login"}},[e._v("#hibernation")]),e._v(" options.")]),e._v(" "),a("p",[e._v('There are "all-in-one" packages you can use e.g.: '),a("a",{attrs:{href:"#laptop-mode-tools"}},[e._v("#LMT")]),e._v(" or "),a("a",{attrs:{href:"#tlp"}},[e._v("#TLP")]),e._v(", both are doing mostly the same."),a("br"),e._v("\nSometimes there no need in such a tools, because you can disable most of the power hungry modules manually.")]),e._v(" "),a("ul",[a("li",[e._v("For example you can take advantage of "),a("a",{attrs:{href:"#nvidia_hybrid_graphics"}},[e._v("#Optimus")]),e._v(" technology and switch off your graphic card, which will save a lot of energy - "),a("strong",[e._v("~6W")]),e._v("("),a("em",[e._v("depends on card")]),e._v(").")]),e._v(" "),a("li",[e._v("Turning on "),a("a",{attrs:{href:"#org880569d"}},[e._v("#audio powersavings")]),e._v(" could save you "),a("strong",[e._v("1-2W")]),e._v(", also disk management with "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/S.M.A.R.T.",target:"_blank",rel:"noopener noreferrer"}},[e._v("S.M.A.R.T"),a("OutboundLink")],1),e._v(" and turning off modules like your "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Power_management#Web_camera",target:"_blank",rel:"noopener noreferrer"}},[e._v("web camera"),a("OutboundLink")],1),e._v(", bluetooth, USB et.c., will help you to save more energy for your laptop.")])]),e._v(" "),a("p",[e._v("For example my stack is: "),a("a",{attrs:{href:"#systemd-login"}},[e._v("#systemd-logind")]),e._v(" + "),a("code",[e._v("UPower")]),e._v(" + "),a("a",{attrs:{href:"#manual-config"}},[e._v("#manually")]),a("br"),e._v(" "),a("a",{attrs:{href:"https://upower.freedesktop.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("UPower"),a("OutboundLink")],1),e._v(" - is an abstraction layer for desktop applications to various power parameters. You can find config at "),a("code",[e._v("/etc/UPower/UPower.conf")]),e._v("."),a("br"),e._v("\nPrograms may use it to check battery status, adjust backlight, or suspend the system without having to care about the specific platform.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yay -S asus-kbd-backlight\nsudo systemctl enable asus-kbd-backlight.service #enable a service to allow user permissions\n")])])]),a("ul",[a("li",[e._v("UPower - using "),a("router-link",{attrs:{to:"./xmonad-configuration.html#policykit"}},[e._v("polkit")]),e._v(" to allow various actions like hibernate without giving away full root privileges.")],1)]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yay -S upower polkit\n")])])]),a("h2",{attrs:{id:"systemd-logind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemd-logind","aria-hidden":"true"}},[e._v("#")]),e._v(" systemd-logind")]),e._v(" "),a("p",[a("a",{attrs:{id:"systemd-login"}}),e._v("\nsystemd-logind - is a native handler and has functions for suspending/hibernating, it handles the most common ACPI events (lid switch, power button, etc.).\nWorth reading wiki article power management with "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Power_management#Power_management_with_systemd",target:"_blank",rel:"noopener noreferrer"}},[e._v("with systemd"),a("OutboundLink")],1),e._v(". Also see "),a("a",{attrs:{href:"#hibernation"}},[e._v("#Hibernation")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"tlp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tlp","aria-hidden":"true"}},[e._v("#")]),e._v(" TLP")]),e._v(" "),a("p",[a("a",{attrs:{id:"tlp"}}),e._v(" "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/TLP",target:"_blank",rel:"noopener noreferrer"}},[e._v("tlp"),a("OutboundLink")],1),e._v(" - all-in-one tool for power management. Could be a good solution if you don't want to understand every technical detail."),a("br"),e._v("\nFor me right now it's in testing mode, means I'm running it and trying to see advantages against manual PM.")]),e._v(" "),a("p",[e._v("To use it without conflicts you need to "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Systemd#Using_units",target:"_blank",rel:"noopener noreferrer"}},[e._v("mask"),a("OutboundLink")],1),e._v(" the systemd service "),a("code",[e._v("systemd-rfkill.service")]),a("br"),e._v("\nand socket "),a("code",[e._v("systemd-rfkill.socket")]),e._v(" to avoid conflicts and assure \\proper operation of TLP's radio device switching options.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yay -S tlp tlp-rdw\nyay -S tlpui-git # you can also install GUI (As of October 2018, the software is still in beta)\n")])])]),a("p",[a("a",{attrs:{href:"https://linrunner.de/en/tlp/docs/tlp-linux-advanced-power-management.html#arch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enable services"),a("OutboundLink")],1),e._v(" for tlp:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl enable tlp.service\nsudo systemctl enable tlp-sleep.service\n# in case if you installed tlp-rdw which is a Radio Device Wizard\nsudo systemctl enable NetworkManager-dispatcher.service #requires NetworkManager\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you have hybrid graphic with bumblebee, you should tell TLP not to manage GPU by blacklisting it. Also check available settings in "),a("code",[e._v("/etc/default/tlp")]),e._v("."),a("br"),e._v("\nBlacklist your GPU:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('RUNTIME_PM_BLACKLIST="01:00.0" #you can add more devices with spaces "01:00.0 00:02.0 ..."\n')])])])]),e._v(" "),a("p",[e._v("Also I had hangs with "),a("code",[e._v("tlp stat")]),e._v(" , one of the solutions is enabling video card with bbswitch "),a("code",[e._v("tee /proc/acpi/bbswitch<<<ON")])]),e._v(" "),a("h2",{attrs:{id:"acpi-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acpi-events","aria-hidden":"true"}},[e._v("#")]),e._v(" ACPI events")]),e._v(" "),a("p",[a("a",{attrs:{id:"acpi-events"}})]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Acpi",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACPI"),a("OutboundLink")],1),e._v("(Advanced Configuration and Power Interface) - small program that displays kernel modules for different ACPI parts."),a("br"),e._v(" "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Acpid",target:"_blank",rel:"noopener noreferrer"}},[e._v("acpid"),a("OutboundLink")],1),e._v(" is a daemon that handles ACPI events like battery, lid et.c..")])]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("You probably already have systemd-logind. So this acpi + acpid bundle is not needed.")])]),e._v(" "),a("h2",{attrs:{id:"laptop-mode-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laptop-mode-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" Laptop Mode Tools")]),e._v(" "),a("p",[a("a",{attrs:{id:"laptop-mode-tools"}}),e._v(" "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Laptop_Mode_Tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("LMT"),a("OutboundLink")],1),e._v(" — Combined with acpid("),a("em",[e._v("note that acpid could conflict with systemd-logind")]),e._v(") and "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/CPU_frequency_scaling",target:"_blank",rel:"noopener noreferrer"}},[e._v("CPU frequency scaling"),a("OutboundLink")],1),e._v(", LMT provides most users with a complete laptop power management suite.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yay -S laptop-mode-tools-git \n# you also can install optional dependencies for lmt\nyay -S acpid bluez-utils hdparm sdparm wireless_tools\n# enable lmt\nsudo systemctl enable laptop-mode.service\n")])])]),a("h2",{attrs:{id:"diagnosing-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diagnosing-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" Diagnosing tools")]),e._v(" "),a("p",[a("a",{attrs:{id:"diagnosing-tools"}})]),e._v(" "),a("ul",[a("li",[e._v("Intel's "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Powertop",target:"_blank",rel:"noopener noreferrer"}},[e._v("powertop"),a("OutboundLink")],1),e._v(" - for diagnosing your power state."),a("br"),e._v("\nWith powertop for some reason I have more watts in use. Don't know if it's a bug or mine fault, anyway not using it now.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yay -S powertop\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/S.M.A.R.T.",target:"_blank",rel:"noopener noreferrer"}},[e._v("S.M.A.R.T."),a("OutboundLink")],1),e._v("("),a("em",[e._v("Self-Monitoring, Analysis, and Reporting Technology")]),e._v(") - For analyzing and monitoring storage devices.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yay -S smartmontools\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/afontenot/i7z",target:"_blank",rel:"noopener noreferrer"}},[e._v("i7z"),a("OutboundLink")],1),e._v(" - is an i7 (and now i3, i5) CPU reporting tool for Linux.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yay -S i7z\n")])])]),a("h2",{attrs:{id:"manual-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-config","aria-hidden":"true"}},[e._v("#")]),e._v(" Manual config")]),e._v(" "),a("p",[a("a",{attrs:{id:"manual-config"}})]),e._v(" "),a("h3",{attrs:{id:"audio-powersavings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio-powersavings","aria-hidden":"true"}},[e._v("#")]),e._v(" Audio powersavings")]),e._v(" "),a("p",[e._v("By default, audio power saving is turned off by most drivers. If you not using tlp or any other tool that cover audio you way want to enable audio powersavings manually."),a("br"),e._v("\nIt can be enabled by setting the power"),a("sub",[e._v("save")]),e._v(" parameter - "),a("em",[e._v("a time (in seconds) to go into idle mode.")]),a("br"),e._v("\nTo idle the audio card after three seconds, pick one of the settings for your card:")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v('Check your driver with "lspci"\nlspci -k | grep Audio')])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# settings for intel soundcard:\noptions snd_hda_intel power_save=3 \n\n# use the following settings for ac97: \noptions snd_ac97_codec power_save=3\n")])])]),a("h3",{attrs:{id:"blacklisting-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blacklisting-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Blacklisting modules")]),e._v(" "),a("p",[e._v("You should blacklist unneeded modules that consumes energy.")])])},[],!1,null,null,null);o.options.__file="power-management.md";t.default=o.exports}}]);