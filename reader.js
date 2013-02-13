// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

window.addEventListener("load",function()
{
	document.getElementById("search").addEventListener("click",send_url,false);
},false);
function send_url(){
	var url="http://www.chhawnchhek.com/cc/?phek=dictionary&m=em&skey="+form.query.value+"&search=Search"+form.query.value;
	window.open(url,'_blank');
	return false;
}
