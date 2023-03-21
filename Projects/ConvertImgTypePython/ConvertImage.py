from PIL import Image
imgName='Facebook'
imgtype='png'
saveTypes=['jpg','ico','bmp']
filename = ('Img/input/'+imgName+'.'+imgtype)
saveas ='Img/output/'+imgName 
img = Image.open(filename)
for x in saveTypes:
    if x!= 'jpg':
        img.save(saveas+'.'+x)
    if x == "jpg":
        img.convert('RGB').save(saveas+'.jpg')
print(x+'File Saved')
