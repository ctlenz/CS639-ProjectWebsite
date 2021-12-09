# Emotion Detection of Live Video with Neural Networks
By Hunter Abraham & Collin Lenz

# Emotion Detection
Emotion detection involves classifying the emotion of a facial expression using computer vision algorithms, in our case a recurrent neural network. This problem can be extended to live video feeds, classifying the emotions of the person or people being recorded in real-time. This classification can be comprised of many subproblems within computer vision, such as edge detection, shadow detection, feature engineering, and machine learning using convolutional neural networks.  ![Image](https://cdn.vox-cdn.com/thumbor/GyrGqYz79xml_3VBPE-lXLf6zv0=/0x0:1592x1064/1200x0/filters:focal(0x0:1592x1064):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/18334536/ll_1.png)

# Our Classification Method
We initally developed a convolutional neural network for feature extraction and then subsequently implemented a LSTM(Long Short Term Memory) recurrent neural network utilizing feature engineering for classification.
### CNN 
[link](page.html)
it will totally work now
### Training Data
We used a dataset from a Kaggle competition called [fer2013](https://www.kaggle.com/deadskull7/fer2013). The dataset is comprised of 48x48 pixel greyscale images of faces that are categorized as: 0=Angry, 1-Disgust, 2-Fear, 3-Happy, 4-Sad, 5-Surprise, and 6-Neutral. The data is represented as two columns, one with the numerical categorization from 0-6 and the other with the pixel values.  ![Image](https://production-media.paperswithcode.com/datasets/FER2013-0000001434-01251bb8_415HDzL.jpg)



### Subsection 
![Image](https://images.contentstack.io/v3/assets/blt71da4c740e00faaa/blt886f949e52cc64c9/60130ad37957730fa57abdd0/RNN_Unrolled.jpg)  neural network data represented in images or graphs


