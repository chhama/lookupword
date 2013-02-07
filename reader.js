// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

window.addEventListener("load",function()
{
	document.getElementById("search").addEventListener("click",send_url,false);
},false);
function send_url(){
	var url="http://oxforddictionaries.com/definition/english/"+form.query.value+"?q="+form.query.value;
	window.open(url,'_blank');
	return false;
}
