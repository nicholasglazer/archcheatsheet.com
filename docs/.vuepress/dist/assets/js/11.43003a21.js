(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{26:function(e,t,a){"use strict";a.r(t);var r=a(2),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bootloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootloader","aria-hidden":"true"}},[e._v("#")]),e._v(" Bootloader")]),e._v(" "),a("p",[a("a",{attrs:{id:"bootloader"}}),e._v("\nYou have different choices like "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/systemd-boot#Standard_root_installations",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemd-boot"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/GRUB",target:"_blank",rel:"noopener noreferrer"}},[e._v("grub"),a("OutboundLink")],1),e._v(" to handle dual boot."),a("br"),e._v(" "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/REFInd",target:"_blank",rel:"noopener noreferrer"}},[e._v("rEFInd"),a("OutboundLink")],1),e._v("is my choice because of easy customization:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pacman -S refind-efi\n")])])]),a("p",[a("img",{attrs:{src:"/images/refind.png",alt:"img",title:"After customization should look like this."}})]),e._v(" "),a("h2",{attrs:{id:"refind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refind","aria-hidden":"true"}},[e._v("#")]),e._v(" rEFInd")]),e._v(" "),a("p",[a("a",{attrs:{id:"refind"}})]),e._v(" "),a("p",[e._v("REFInd will automatically find your EFI System Partition (ESP) with installation script.\nYou can use "),a("code",[e._v("refind-install")]),e._v(" script with "),a("code",[e._v("--root")]),e._v(' flag to help install it from a "live CD" or other emergency system,\nnotice that your '),a("code",[e._v("/boot")]),e._v(" partition should be mounted.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("It's a common practice to use "),a("code",[e._v("man")]),e._v(" utility to learn more about the particular program.\nSo if you need more options like "),a("code",[e._v("--alldrivers")]),e._v(", feel free to check it with "),a("code",[e._v("man")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("man refind-install\n")])])]),a("p",[e._v("Run the script:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("refind-install\n")])])]),a("h2",{attrs:{id:"kernel-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kernel-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Kernel options")]),e._v(" "),a("p",[a("a",{attrs:{id:"kernel-options"}}),e._v("\nYou should place your "),a("code",[e._v("refind_linux.conf")]),e._v(" file in the same directory as your kernel."),a("br"),e._v("\nAnd the basic config to run the system could look like this:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('## This file should be present in the same directory as the EFISTUB kernel and initramfs files\n## More info at http://www.rodsbooks.com/refind/linux.html , http://www.rodsbooks.com/efi-bootloaders/efistub.html\n\n"Boot with defaults"    \t"root=PARTUUID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX rootfstype=ext4 rw add_efi_memmap initrd=/intel-ucode.img initrd=/initramfs-linux.img"\n')])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Notice that you can put custom kernel options here, e.g.: I'm using "),a("code",[e._v('acpi_osi=! acpi_osi="Windows 2009" acpi_backlight=native')]),e._v(" for my "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/ASUS_Zenbook_Pro_UX501",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zenbook Pro UX501VM"),a("OutboundLink")],1),e._v(" because of "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/NVIDIA_Optimus#Lockup_issue_.28lspci_hangs.29",target:"_blank",rel:"noopener noreferrer"}},[e._v("known Nvidia issue"),a("OutboundLink")],1),e._v("."),a("br"),e._v("\nAnd "),a("code",[e._v("nmi_watchdog=0")]),e._v(" to disable watchdog for the energy savings.")])]),e._v(" "),a("p",[e._v("There are several ways to findout your "),a("code",[e._v("PARTUUID")]),e._v(", one of them is:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("blkid -s PARTUUID -o value /dev/sdxY #Where 'x' is the disk letter and 'Y' is the partition number.\n")])])]),a("p",[e._v("Also, to set the default boot OS based on the loader's title, which appears in the main menu beneath the icons when you select the loader by uncommenting or adding:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('default_selection "+,vmlinuz"\n')])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("For novice linux users it's better to learn more about "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Kernel",target:"_blank",rel:"noopener noreferrer"}},[e._v("kernel"),a("OutboundLink")],1),e._v(" and re-check how to pass parameters "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/REFInd#Passing_kernel_parameters",target:"_blank",rel:"noopener noreferrer"}},[e._v("in rEFInd"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"refind-customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refind-customization","aria-hidden":"true"}},[e._v("#")]),e._v(" rEFInd customization")]),e._v(" "),a("p",[a("a",{attrs:{id:"refind-customization"}})]),e._v(" "),a("p",[e._v("As you saw on the picture, you have ability to use themes in rEFInd. I can recommend "),a("a",{attrs:{href:"https://github.com/EvanPurkhiser/rEFInd-minimal",target:"_blank",rel:"noopener noreferrer"}},[e._v("refind-minimal"),a("OutboundLink")],1),e._v(" as a minimalistic and beautiful theme. "),a("em",[e._v("You will setup git in the next steps")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Create a folder called "),a("code",[e._v("themes")]),e._v(" in the same directory with "),a("code",[e._v("refind.conf")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir themes\ncd themes\n")])])]),a("ul",[a("li",[e._v("Clone theme repository:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/EVanPurkhiser/rEFInd-minimal.git\n")])])]),a("ul",[a("li",[e._v("To enable the theme add this in the end of "),a("code",[e._v("refind.conf")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("include themes/rEFInd-minimal/theme.conf\n")])])]),a("h2",{attrs:{id:"reboot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reboot","aria-hidden":"true"}},[e._v("#")]),e._v(" Reboot")]),e._v(" "),a("p",[a("a",{attrs:{id:"reboot"}}),e._v("\nExit the chroot environment, reboot the system and go to the next step:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("exit\numount -R /mnt\nreboot\n")])])])])},[],!1,null,null,null);s.options.__file="bootloader.md";t.default=s.exports}}]);