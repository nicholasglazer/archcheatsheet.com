(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{24:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"chroot-into-the-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chroot-into-the-system","aria-hidden":"true"}},[e._v("#")]),e._v(" Chroot into the system")]),e._v(" "),a("p",[a("a",{attrs:{id:"chroot"}}),e._v("\nSwitch into the root with a new system:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("arch-chroot /mnt\n")])])]),a("h2",{attrs:{id:"locale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#locale","aria-hidden":"true"}},[e._v("#")]),e._v(" Locale")]),e._v(" "),a("p",[a("a",{attrs:{id:"locale"}}),e._v("\nUncomment needed locales e.g. "),a("code",[e._v("en_US.UTF-8 UTF-8")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim /etc/locale.gen\n")])])]),a("p",[e._v("And generate them:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("locale-gen\n")])])]),a("p",[e._v("Also add "),a("code",[e._v("LANG")]),e._v(" variable:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('cat > /etc/locale.conf\necho "LANG=en_US.UTF-8" > /etc/locale.conf\n')])])]),a("p",[e._v("Example to make dvorak layout persistent:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('cat > /etc/vconsole.conf\necho "KEYMAP=dvorak" > /etc/vconsole.conf\n')])])]),a("h2",{attrs:{id:"network-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Network configuration")]),e._v(" "),a("p",[a("a",{attrs:{id:"network-configuration"}}),e._v(" "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hostname",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hostname"),a("OutboundLink")],1),e._v(" - is a unique name created to identify a machine on a network.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Basic method that "),a("strong",[e._v("working in arch-chroot")]),e._v(".:")]),e._v(" Replace "),a("code",[e._v("uniquename")]),e._v(" with anything you want:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("echo uniquename > /etc/hostname\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Later you will see something like "),a("code",[e._v("user@uniquename")])])]),e._v(" "),a("ul",[a("li",[e._v("You will be able to generate hostname with "),a("code",[e._v("hostnamectl")]),e._v(" later. This method is "),a("strong",[e._v("not working in arch-chroot")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hostnamectl set-hostname myhostname\n")])])]),a("p",[e._v("Add matching entries to the hosts, edit "),a("code",[e._v("vim /etc/hosts")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1     localhost\n::1           localhost\n127.0.1.1     uniquename.localdomain uniquename\n")])])]),a("p",[e._v("If the system has a permanent IP address, it should be used instead of "),a("code",[e._v("127.0.1.1")]),a("br"),e._v("\nSee more in "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Network_configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("network configuration"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"community-repositories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-repositories","aria-hidden":"true"}},[e._v("#")]),e._v(" Community repositories")]),e._v(" "),a("p",[a("a",{attrs:{id:"community-repositories"}}),e._v("\nEnabling "),a("strong",[e._v("multilib")]),e._v(" for the arch community repositories.")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[a("code",[e._v("multilib")]),e._v(" is for 64bit system.")])]),e._v(" "),a("p",[e._v("To do this open the "),a("code",[e._v("pacman.conf")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim /etc/pacman.conf\n")])])]),a("p",[e._v("Uncomment this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#[multilib]\n#Include = /etc/pacman.d/mirrorlist\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You also may add "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Unofficial_user_repositories",target:"_blank",rel:"noopener noreferrer"}},[e._v("unofficial repositories"),a("OutboundLink")],1),e._v(" with caution.")]),e._v(" "),a("ul",[a("li",[e._v("To have pacman animation add this under the 'Misc options':")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ILoveCandy\n")])])]),a("ul",[a("li",[e._v("You will need "),a("em",[e._v("Color")]),e._v(" option for "),a("code",[e._v("yay")]),e._v(" later.")])])]),e._v(" "),a("p",[e._v("And update the system. We should "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/mirrors#Force_pacman_to_refresh_the_package_lists",target:"_blank",rel:"noopener noreferrer"}},[e._v("let system know about the changes"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pacman -Syyu\n")])])]),a("h2",{attrs:{id:"user-and-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-and-password","aria-hidden":"true"}},[e._v("#")]),e._v(" User and password")]),e._v(" "),a("p",[a("a",{attrs:{id:"user-and-password"}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Root password:")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("passwd\n")])])]),a("ul",[a("li",[a("strong",[e._v("User password:")]),a("br"),e._v("\nYou should add at least one user. Replace "),a("code",[e._v("username")]),e._v(" with preferred one:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("useradd -m -g users -G wheel,storage,power -s /bin/bash username\n")])])]),a("p",[e._v("And set password for a new user:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("passwd username\n")])])]),a("h2",{attrs:{id:"sudoers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sudoers","aria-hidden":"true"}},[e._v("#")]),e._v(" Sudoers")]),e._v(" "),a("p",[a("a",{attrs:{id:"sudoers"}})]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Read about "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Sudo#Using_visudo",target:"_blank",rel:"noopener noreferrer"}},[e._v("visudo"),a("OutboundLink")],1),e._v(" before editing! Any errors makes "),a("strong",[e._v("sudo")]),e._v(" unusable."),a("br"),e._v(" "),a("strong",[e._v("Always")]),e._v(" edit "),a("code",[e._v("/etc/sudoers")]),e._v(" file with "),a("code",[e._v("visudo")]),e._v(" to prevent errors.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EDITOR=vim visudo\n")])])]),a("p",[e._v("Since you added user to the "),a("code",[e._v("wheel")]),e._v(" group, user will gain full root privileges, you need to uncomment this line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("%wheel ALL=(ALL) ALL\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("If you are using a server or someone else has access to the wheel group, you may want to require sudoers to type root password."),a("br"),e._v("\nIn this case add this line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Defaults rootpw\n")])])])]),e._v(" "),a("p",[e._v("Read more about "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Sudo#Root_password",target:"_blank",rel:"noopener noreferrer"}},[e._v("root password"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"microcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microcode","aria-hidden":"true"}},[e._v("#")]),e._v(" Microcode")]),e._v(" "),a("p",[a("a",{attrs:{id:"microcode"}}),e._v("\nYou should enable "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/microcode#systemd-boot",target:"_blank",rel:"noopener noreferrer"}},[e._v("microcode"),a("OutboundLink")],1),e._v(" updates, my laptop has intel CPU:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pacman -S intel-ucode\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Install "),a("code",[e._v("amd-ucode")]),e._v(" if you have AMD CPU.")])])])},[],!1,null,null,null);r.options.__file="arch-chroot.md";t.default=r.exports}}]);