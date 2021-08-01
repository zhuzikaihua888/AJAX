let n=1;
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.response)
            const array=JSON.parse(request.response)
            array.forEach(item => {
            const li=document.createElement("li"); 
            li.textContent=item.id
            xxx.appendChild(li)
            });
           n+=1 
        }
    }
request.send()
};

getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            console.log(request.response)
           //解析这个数据
            const object =JSON.parse(request.response)
            Myname.textContent=object.name
            console.log(object)
       
         }
    }
request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //console.log(request.response)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html')
    request.onload = () => {
        console.log(request.response)
        //创建div
        const div = document.createElement('div')
        //插入内容
        div.innerHTML = request.response
        //放到身体里面
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log(request.response)
        //创建script标签
        const script = document.createElement('script')
        //写人script内容 
        script.innerHTML = request.response
        //放到body里面 
        document.body.appendChild(script)
    }
    request.onerror = () => { }
    request.send()
};
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        console.log(request.readyState)
        //下载完成,但不知道是成功2xx,还是失败4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('request.response')
                console.log(request.response)
                // 创建style元素
                const style = document.createElement('style')
                //写入style内容
                style.innerHTML = request.response
                //加到头部
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }

    };
    request.send()
}
