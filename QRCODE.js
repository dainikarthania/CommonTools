var QRCode = require('qrcode')
const sharp = require('sharp');

// const { createCanvas, loadImage } = require('canvas')
// const QRLogo = require('qr-with-logo');

// const codeWidth = 200
// const iconWidth = codeWidth / 4
// const canvas = createCanvas(codeWidth, codeWidth)

// const ctx = canvas.getContext('2d');


// async function abc(){

//     await QRCode.toCanvas(canvas, 'https://openbase.com/categories/js/best-nodejs-qr-code-generator-libraries', {
//         width: codeWidth,
//         margin: 1,
//         padding:10,
//         errorCorrectionLevel:'L'
//         });
    
//     const image = await loadImage('https://dev.suruse.com:4000/static/email_icons/suruse_logo.png');

//     const iconPos = (codeWidth - iconWidth) / 2
//     ctx.drawImage(image, iconPos, iconPos, iconWidth, iconWidth)
    

//     console.log(canvas.toDataURL());
    
// }


// QRCode.toDataURL('https://openbase.com/categories/js/best-nodejs-qr-code-generator-libraries')
//   .then(url => {
//     let base64Data = url.replace(/^data:image\/(jpg|jpeg|png);base64,/, "")
//     let b = new Buffer(base64Data, 'base64')
//     console.log("b",b)
//     sharp(b)
//     .composite([{input: "", gravity: 'centre' }])
//     .toBuffer((err, data, info) => {
//         console.log(err)
//         console.log(Buffer.from(data,'base64').toString("base64"))

//     })

// })
//   .catch(err => {
//     console.error(err)
//   })





  















// let b=new Buffer("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",'base64')

// console.log("ee",b)







async function generateAndUploadQRCode(data){
    let qrImage=await new Promise((rs,rj)=>{
      QRCode.toDataURL(data,{ errorCorrectionLevel: 'M',width:250,margin:6 })
        .then(url => {
          return rs(url)
        }).catch(e=>{
        return null
      })
    })

    // console.log("qrImage",qrImage)
    let base64Data = qrImage.replace(/^data:image\/(jpg|jpeg|png);base64,/, "")
    let b = new Buffer(base64Data, 'base64')
    let logoBuffer=new Buffer("iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABMNJREFUWEfFmM0rPVEYx5+JwsJbUihcNpSEJCy4rKyEEAt1iWKHlZUuK0neFhZW+AsuSVbytmEhlkrytrG7XhaSMr++p850Zu45M3Ouy++pm9s1c85nnpfv88wxTNM0SdNeXl7o+PiYrq6u6OjoiO7v79mHW1ZWFlVXV1MgEKCWlhYKBoPsezxm6AACZmtri7a3twmQOgbgiYkJCoVCOreRL0B4Z2hoiHnrpwZPzszM+Ab1BJydnWULJtoQ+o2NDc/QKwERwq6uroR4TfVwyNVIJMLyVGVSQMC1trayIvgLgycHBwelW8UA/jUcp4InOzs7YyBjAOG5RBSDrucR7sPDQyZPotkAUQwoiv9lgAMkYLlZgJCSkpKSH7FVVVWxMCHpISdcnLmQ4y80FBF6fX2V7hUOh22qYQH+JLQQX3hfp1tsbm6yex4eHmJA7+7urLUYIJ4IgDpWWFhITU1N1NjYSOnp6VZn4eEpLy+nsrIyW7hk68vSCg+MB4AxQJQ4Wpgfq6+vZw+Tmprq53LKy8tjvRjAKoODkBpi2KPRKHs4IxqNmsg9r96amZlJIyMjzFvxGMLf1tbGgGUGzUXuckiujUYkEjHRMdysoqKCBgYG6PPzMx426x54va+vT5mrImRHRwcrKCMcDptu0gK4np4eMgzjR3DizYBUhXxlZYUmJydZeBFmIxgMmpjtZFZUVMSmmETCYR94EoWgCjdCDSZUsxEIBExx2BRBp6amKC0tLWGeExeCh8bHx5X5WFNTw0QbcZNO1N3d3VRZWRk3HIoKphJk/A/VrZpk8DskSAk4PT1NSUlJvgEB1NDQwHJLbFVY4Pn5ma6vr9l0JAIj1PCiTLKgg1AWKSAKo7e31xdcSkoK8wLg/Bg0T8x5VKtzQMA6SDs8kLRIRkdHKT8/33M/wEHkVcmuWgAehYcgW+g2/f390ksBKQX0UxwcDpuhC4nDLX+bg3ec4eYkuG99fZ2FF/upzAiFQqazzc3NzXmKcl1dHS0sLLjOjgBdXl6WDqIA4uHGBKMElHUSr5ekr68vWltb82yPfFO8bgJUZhBmhFiVJqwXZ2dn2+71Ary4uKDd3V3PHBUvACBAnXZ2dsbgVKMam2a4cvObvQCxmZu+qcjFOY9fAynBxxUQFYWWxm1paYne3t6k+6DtyXIGOggPoar5ZtgYDZ8PpuKc59f91kSNRfl0OzY2psyJj48Pmp+ft62PUR8gKi8AFFHC+hgAdMwCFL3Y3t5OtbW10nWcgPAc9EolJ2IoIcjYx+1F3bmp7a0OU+3Ozg7bDF6UtSAnoNtLt3MzeBlrxw3IkxUF4CbWYhHx0dxv2CDostam1EHn8RufalEMaOSyWfD09JQODg6ouLjYdi7oF1LnOunZDEKB1wC8HGEkctr7+zstLi4yT1xeXursp32t8nQLyQzZGB4epoyMjJiF9/f36fz8nOI4oNWCdD0fRHWicJqbmyknJ8e28Pf3N62urrKqlB36aFG4XOx5gIl7URSYPpwjGHryyckJ+/yW+QLE5qjwvb09ur29tYUVnkxOTiZM4L9hvgFFwb25uaHHx0d6enqyenJBQQGVlpYygfcSbZ0H0QZ0Ls6bPX4HMMQ9NzdX6yDJDfgfdrmxJ9nRM3MAAAAASUVORK5CYII=",'base64')

    let qrWithLogo=await new Promise((rs,rj)=>{
      sharp(b)
        .composite([{input: logoBuffer, gravity: 'centre'}])
        .toBuffer((err, data, info) => {
          if(err) return rs(null)
          
        //   let logo=Buffer.from(data,'base64').toString("base64")
        //   return rs(`data:image/png;base64,${logo}`)

          return rs(data)
        })
    })

    let textBuffer=new Buffer("PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCA5NiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMjMgMTUuMDY3QzEzLjMzMjMgMTYuOTEzNyAxMi42NjU1IDE4LjM2ODYgMTEuMzMxOCAxOS40MzE5QzEwLjAwNzQgMjAuNDk1MSA4LjE2MDczIDIxLjAyNjcgNS43OTE3OSAyMS4wMjY3QzMuNjA5MzggMjEuMDI2NyAxLjY3ODc4IDIwLjYxNjMgMCAxOS43OTU2VjE1Ljc2NjVDMS4zODAzMyAxNi4zODIxIDIuNTQ2MTUgMTYuODE1OCAzLjQ5NzQ2IDE3LjA2NzZDNC40NTgwOSAxNy4zMTk0IDUuMzM0NzkgMTcuNDQ1MyA2LjEyNzU0IDE3LjQ0NTNDNy4wNzg4NSAxNy40NDUzIDcuODA2MzIgMTcuMjYzNCA4LjMwOTk2IDE2Ljg5OTdDOC44MjI5MiAxNi41MzYgOS4wNzk0IDE1Ljk5NSA5LjA3OTQgMTUuMjc2OUM5LjA3OTQgMTQuODc1OCA4Ljk2NzQ4IDE0LjUyMTQgOC43NDM2NCAxNC4yMTM3QzguNTE5OCAxMy44OTY2IDguMTg4NzEgMTMuNTkzNCA3Ljc1MDM2IDEzLjMwNDNDNy4zMjEzNCAxMy4wMTUyIDYuNDM5OTggMTIuNTUzNSA1LjEwNjI5IDExLjkxOTNDMy44NTY1MyAxMS4zMzE4IDIuOTE5MjEgMTAuNzY3NSAyLjI5NDMzIDEwLjIyNjZDMS42Njk0NSA5LjY4NTYyIDEuMTcwNDggOS4wNTYwOCAwLjc5NzQyIDguMzM3OTRDMC40MjQzNTggNy42MTk3OSAwLjIzNzgyNyA2Ljc4MDQgMC4yMzc4MjcgNS44MTk3N0MwLjIzNzgyNyA0LjAxMDQyIDAuODQ4NzE2IDIuNTg4MTIgMi4wNzA0OSAxLjU1Mjg3QzMuMzAxNiAwLjUxNzYyNCA0Ljk5OTAzIDAgNy4xNjI3OSAwQzguMjI2MDIgMCA5LjIzNzk1IDAuMTI1OTA5IDEwLjE5ODYgMC4zNzc3MjZDMTEuMTY4NSAwLjYyOTU0MiAxMi4xODA1IDAuOTgzOTUxIDEzLjIzNDQgMS40NDA5NUwxMS44MzU0IDQuODEyNUMxMC43NDQyIDQuMzY0ODMgOS44Mzk1MSA0LjA1MjM5IDkuMTIxMzcgMy44NzUxOEM4LjQxMjU1IDMuNjk3OTggNy43MTMwNiAzLjYwOTM4IDcuMDIyODkgMy42MDkzOEM2LjIwMjE2IDMuNjA5MzggNS41NzI2MSAzLjgwMDU3IDUuMTM0MjcgNC4xODI5NkM0LjY5NTkyIDQuNTY1MzUgNC40NzY3NCA1LjA2NDMyIDQuNDc2NzQgNS42Nzk4N0M0LjQ3Njc0IDYuMDYyMjYgNC41NjUzNSA2LjM5ODAxIDQuNzQyNTUgNi42ODcxNEM0LjkxOTc2IDYuOTY2OTMgNS4xOTk1NSA3LjI0MjA3IDUuNTgxOTQgNy41MTI1NEM1Ljk3MzY2IDcuNzczNjggNi44OTIzMiA4LjI0OTMzIDguMzM3OTQgOC45Mzk1QzEwLjI0OTkgOS44NTM1IDExLjU2MDMgMTAuNzcyMiAxMi4yNjkxIDExLjY5NTVDMTIuOTc3OSAxMi42MDk1IDEzLjMzMjMgMTMuNzMzMyAxMy4zMzIzIDE1LjA2N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNy43ODM4IDIwLjc0NjlMMjcuMjEwMiAxOC43NDY0SDI2Ljk4NjRDMjYuNTI5NCAxOS40NzM4IDI1Ljg4MTIgMjAuMDM4MSAyNS4wNDE4IDIwLjQzOTFDMjQuMjAyNCAyMC44MzA4IDIzLjI0NjQgMjEuMDI2NyAyMi4xNzM5IDIxLjAyNjdDMjAuMzM2NSAyMS4wMjY3IDE4Ljk1MTUgMjAuNTM3MSAxOC4wMTg5IDE5LjU1NzhDMTcuMDg2MiAxOC41NjkyIDE2LjYxOTkgMTcuMTUxNSAxNi42MTk5IDE1LjMwNDlWNS4xMDYyOUgyMC44ODY4VjE0LjI0MTZDMjAuODg2OCAxNS4zNzAyIDIxLjA4NzMgMTYuMjE4OSAyMS40ODg0IDE2Ljc4NzhDMjEuODg5NCAxNy4zNDc0IDIyLjUyODMgMTcuNjI3MiAyMy40MDUgMTcuNjI3MkMyNC41OTg4IDE3LjYyNzIgMjUuNDYxNSAxNy4yMzA4IDI1Ljk5MzEgMTYuNDM4QzI2LjUyNDcgMTUuNjM2IDI2Ljc5MDUgMTQuMzExNiAyNi43OTA1IDEyLjQ2NDlWNS4xMDYyOUgzMS4wNTc0VjIwLjc0NjlIMjcuNzgzOFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00NC4yNjM4IDQuODEyNUM0NC44NDIxIDQuODEyNSA0NS4zMjI0IDQuODU0NDcgNDUuNzA0OCA0LjkzODQxTDQ1LjM4MyA4LjkzOTVDNDUuMDM3OSA4Ljg0NjIzIDQ0LjYxODIgOC43OTk2IDQ0LjEyMzkgOC43OTk2QzQyLjc2MjIgOC43OTk2IDQxLjY5OSA5LjE0OTM1IDQwLjkzNDIgOS44NDg4NEM0MC4xNzg4IDEwLjU0ODMgMzkuODAxMSAxMS41Mjc2IDM5LjgwMTEgMTIuNzg2N1YyMC43NDY5SDM1LjUzNDJWNS4xMDYyOUgzOC43NjU4TDM5LjM5NTMgNy43MzYzN0gzOS42MDUyQzQwLjA5MDIgNi44NTk2OCA0MC43NDMgNi4xNTU1MiA0MS41NjM4IDUuNjIzOTFDNDIuMzkzOCA1LjA4Mjk3IDQzLjI5MzggNC44MTI1IDQ0LjI2MzggNC44MTI1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTU5LjYyNDYgMjAuNzQ2OUw1OS4wNTExIDE4Ljc0NjRINTguODI3MkM1OC4zNzAyIDE5LjQ3MzggNTcuNzIyIDIwLjAzODEgNTYuODgyNiAyMC40MzkxQzU2LjA0MzIgMjAuODMwOCA1NS4wODczIDIxLjAyNjcgNTQuMDE0NyAyMS4wMjY3QzUyLjE3NzQgMjEuMDI2NyA1MC43OTI0IDIwLjUzNzEgNDkuODU5NyAxOS41NTc4QzQ4LjkyNzEgMTguNTY5MiA0OC40NjA4IDE3LjE1MTUgNDguNDYwOCAxNS4zMDQ5VjUuMTA2MjlINTIuNzI3NlYxNC4yNDE2QzUyLjcyNzYgMTUuMzcwMiA1Mi45MjgyIDE2LjIxODkgNTMuMzI5MiAxNi43ODc4QzUzLjczMDMgMTcuMzQ3NCA1NC4zNjkxIDE3LjYyNzIgNTUuMjQ1OCAxNy42MjcyQzU2LjQzOTYgMTcuNjI3MiA1Ny4zMDIzIDE3LjIzMDggNTcuODMzOSAxNi40MzhDNTguMzY1NSAxNS42MzYgNTguNjMxNCAxNC4zMTE2IDU4LjYzMTQgMTIuNDY0OVY1LjEwNjI5SDYyLjg5ODNWMjAuNzQ2OUg1OS42MjQ2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTc4LjI4NzEgMTYuMTAyM0M3OC4yODcxIDE3LjcwNjUgNzcuNzI3NSAxOC45MjgyIDc2LjYwODMgMTkuNzY3NkM3NS40OTg0IDIwLjYwNyA3My44MzM2IDIxLjAyNjcgNzEuNjEzOSAyMS4wMjY3QzcwLjQ3NjEgMjEuMDI2NyA2OS41MDYxIDIwLjk0NzQgNjguNzA0IDIwLjc4ODlDNjcuOTAxOSAyMC42Mzk3IDY3LjE1MTIgMjAuNDE1OCA2Ni40NTE3IDIwLjExNzRWMTYuNTkxOUM2Ny4yNDQ0IDE2Ljk2NSA2OC4xMzUxIDE3LjI3NzQgNjkuMTIzNyAxNy41MjkzQzcwLjEyMTcgMTcuNzgxMSA3MC45OTg0IDE3LjkwNyA3MS43NTM4IDE3LjkwN0M3My4zMDIgMTcuOTA3IDc0LjA3NjEgMTcuNDU5MyA3NC4wNzYxIDE2LjU2NEM3NC4wNzYxIDE2LjIyODIgNzMuOTczNSAxNS45NTc3IDczLjc2ODMgMTUuNzUyNUM3My41NjMyIDE1LjUzOCA3My4yMDg4IDE1LjMwMDIgNzIuNzA1MSAxNS4wMzkxQzcyLjIwMTUgMTQuNzY4NiA3MS41MyAxNC40NTYyIDcwLjY5MDYgMTQuMTAxN0M2OS40ODc1IDEzLjU5ODEgNjguNjAxNCAxMy4xMzE4IDY4LjAzMjUgMTIuNzAyOEM2Ny40NzI5IDEyLjI3MzcgNjcuMDYyNiAxMS43ODQxIDY2LjgwMTQgMTEuMjMzOEM2Ni41NDk2IDEwLjY3NDIgNjYuNDIzNyA5Ljk4ODczIDY2LjQyMzcgOS4xNzczMkM2Ni40MjM3IDcuNzg3NjcgNjYuOTYgNi43MTUxMiA2OC4wMzI1IDUuOTU5NjdDNjkuMTE0NCA1LjE5NDg5IDcwLjY0NCA0LjgxMjUgNzIuNjIxMiA0LjgxMjVDNzQuNTA1MSA0LjgxMjUgNzYuMzM3OCA1LjIyMjg3IDc4LjExOTIgNi4wNDM2TDc2LjgzMjEgOS4xMjEzN0M3Ni4wNDg3IDguNzg1NjEgNzUuMzE2NiA4LjUxMDQ4IDc0LjYzNTcgOC4yOTU5N0M3My45NTQ5IDguMDgxNDUgNzMuMjYgNy45NzQyIDcyLjU1MTIgNy45NzQyQzcxLjI5MjEgNy45NzQyIDcwLjY2MjYgOC4zMTQ2MiA3MC42NjI2IDguOTk1NDZDNzAuNjYyNiA5LjM3Nzg1IDcwLjg2MzEgOS43MDg5NCA3MS4yNjQyIDkuOTg4NzRDNzEuNjc0NSAxMC4yNjg1IDcyLjU2NTIgMTAuNjgzNiA3My45MzYyIDExLjIzMzhDNzUuMTU4IDExLjcyODEgNzYuMDUzNCAxMi4xODk4IDc2LjYyMjMgMTIuNjE4OEM3Ny4xOTEyIDEzLjA0NzggNzcuNjEwOSAxMy41NDIyIDc3Ljg4MTQgMTQuMTAxN0M3OC4xNTE4IDE0LjY2MTMgNzguMjg3MSAxNS4zMjgyIDc4LjI4NzEgMTYuMTAyM1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04OC4wOTM5IDcuODQ4MjlDODcuMTg5MyA3Ljg0ODI5IDg2LjQ4MDQgOC4xMzc0MSA4NS45Njc1IDguNzE1NjZDODUuNDU0NSA5LjI4NDU4IDg1LjE2MDcgMTAuMDk2IDg1LjA4NjEgMTEuMTQ5OUg5MS4wNzM4QzkxLjA1NTEgMTAuMDk2IDkwLjc4IDkuMjg0NTggOTAuMjQ4NCA4LjcxNTY2Qzg5LjcxNjggOC4xMzc0MSA4OC45OTg2IDcuODQ4MjkgODguMDkzOSA3Ljg0ODI5Wk04OC42OTU1IDIxLjAyNjdDODYuMTc3MyAyMS4wMjY3IDg0LjIwOTQgMjAuMzMxOSA4Mi43OTE4IDE4Ljk0MjJDODEuMzc0MiAxNy41NTI2IDgwLjY2NTMgMTUuNTg0NyA4MC42NjUzIDEzLjAzODVDODAuNjY1MyAxMC40MTc4IDgxLjMxODIgOC4zOTM4OSA4Mi42MjM5IDYuOTY2OTNDODMuOTM5IDUuNTMwNjQgODUuNzUzIDQuODEyNSA4OC4wNjYgNC44MTI1QzkwLjI3NjMgNC44MTI1IDkxLjk5NzEgNS40NDIwNCA5My4yMjgyIDYuNzAxMTNDOTQuNDU5MyA3Ljk2MDIxIDk1LjA3NDkgOS42OTk2MSA5NS4wNzQ5IDExLjkxOTNWMTMuOTg5OEg4NC45ODgyQzg1LjAzNDggMTUuMjAyMyA4NS4zOTM5IDE2LjE0ODkgODYuMDY1NCAxNi44Mjk4Qzg2LjczNjkgMTcuNTEwNiA4Ny42Nzg5IDE3Ljg1MSA4OC44OTE0IDE3Ljg1MUM4OS44MzMzIDE3Ljg1MSA5MC43MjQgMTcuNzUzMSA5MS41NjM0IDE3LjU1NzJDOTIuNDAyOCAxNy4zNjE0IDkzLjI3OTUgMTcuMDQ4OSA5NC4xOTM1IDE2LjYxOTlWMTkuOTIxNUM5My40NDc0IDIwLjI5NDYgOTIuNjUgMjAuNTY5NyA5MS44MDEyIDIwLjc0NjlDOTAuOTUyNSAyMC45MzM0IDg5LjkxNzMgMjEuMDI2NyA4OC42OTU1IDIxLjAyNjdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",'base64')
    
    let qrWithTextLogo=await new Promise((rs,rj)=>{
        sharp(qrWithLogo)
          .composite([{input: textBuffer, gravity: 'south'}])
          .toBuffer((err, data, info) => {
            if(err) return rs(null)
            
            let logo=Buffer.from(data,'base64').toString("base64")
            return rs(`data:image/png;base64,${logo}`)
  
          //   return rs(data)
          })
      })
  

    console.log(qrWithTextLogo)


   
  }

  generateAndUploadQRCode("https://base64.guru/converter/encode/image")
