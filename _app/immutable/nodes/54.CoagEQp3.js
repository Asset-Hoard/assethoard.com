import"../chunks/DsnmJJEf.js";import"../chunks/KApz5yFX.js";import{aH as e,g as i,aJ as s,aL as l,aK as r}from"../chunks/Ca_jcMmy.js";import{h as n}from"../chunks/DKWjtj8y.js";var p=s('<meta name="description" content="Third-party open-source components included in AssetHoard, with their licences and copyright notices."/>'),h=s(`<div class="page-header svelte-1cp6cha"><div class="container"><h1>Open-source licences</h1> <p class="page-subtitle svelte-1cp6cha">Last updated: November 2026</p></div></div> <section class="section"><div class="container content svelte-1cp6cha"><p class="svelte-1cp6cha">AssetHoard includes the open-source components below. This list covers the audio export
			encoders. It is not yet a complete list of every library AssetHoard uses, and we'll keep
			adding to it.</p> <h2 class="svelte-1cp6cha">LAME (MP3 encoder)</h2> <p class="svelte-1cp6cha"><a href="https://lame.sourceforge.io/" rel="noopener">lame.sourceforge.io</a></p> <p class="svelte-1cp6cha">LAME is licensed under the GNU Lesser General Public License (LGPL). The full licence
			text ships as <code>lame/COPYING</code> in the application's resources on Windows and
			macOS, and is also available at <a href="https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html" rel="noopener">gnu.org</a>.</p> <p class="svelte-1cp6cha">AssetHoard does not link LAME into its executable. It loads the LAME shared library at
			runtime, and you may replace that file with your own build of LAME:</p> <ul class="svelte-1cp6cha"><li class="svelte-1cp6cha"><strong class="svelte-1cp6cha">Windows:</strong> <code>libmp3lame.dll</code></li> <li class="svelte-1cp6cha"><strong class="svelte-1cp6cha">macOS:</strong> <code>libmp3lame.dylib</code></li> <li class="svelte-1cp6cha"><strong class="svelte-1cp6cha">Linux:</strong> the system's <code>libmp3lame.so.0</code></li></ul> <p class="svelte-1cp6cha">The LAME library source is the unmodified 4.0 release, built without its decoder: <a href="https://downloads.sourceforge.net/project/lame/lame/4.0/lame-4.0.tar.gz" rel="noopener">lame-4.0.tar.gz</a>.</p> <h2 class="svelte-1cp6cha">libvorbis and libogg (OGG Vorbis encoder)</h2> <p class="svelte-1cp6cha">Includes the aoTuV and Lancer patches.</p> <ul class="svelte-1cp6cha"><li class="svelte-1cp6cha">Copyright (c) 2002-2020 Xiph.org Foundation</li> <li class="svelte-1cp6cha">Copyright (c) 2002, Xiph.org Foundation (libogg)</li> <li class="svelte-1cp6cha">aoTuV patches by Aoyumi; Lancer optimisations; distributed under the same licence as
				libvorbis</li> <li class="svelte-1cp6cha">vorbis_rs, aotuv_lancer_vorbis_sys, ogg_next_sys: Copyright 2022 Alejandro González</li></ul> <pre class="licence-text svelte-1cp6cha">Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation and/or
other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
may be used to endorse or promote products derived from this software without
specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</pre> <h2 class="svelte-1cp6cha">hound (WAV encoder)</h2> <p class="svelte-1cp6cha"><a href="https://github.com/ruuda/hound" rel="noopener">github.com/ruuda/hound</a></p> <p class="svelte-1cp6cha">Licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" rel="noopener">Apache License, Version 2.0</a>.</p> <h2 class="svelte-1cp6cha">Questions</h2> <p class="svelte-1cp6cha">If you need source or licence details for any component, get in touch via our <a href="/contact">contact form</a>.</p></div></section>`,1);function m(t){var o=h();n("1cp6cha",a=>{var c=p();i(()=>{l.title="Open-source licences - AssetHoard"}),e(a,c)}),r(2),e(t,o)}export{m as component};
