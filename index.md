# Emotion Detection of Live Video with Neural Networks
By Hunter Abraham & Collin Lenz

# Emotion Detection
Emotion detection involves classifying the emotion of a facial expression using computer vision algorithms, in our case a recurrent neural network. This problem can be extended to live video feeds, classifying the emotions of the person or people being recorded in real-time. This classification can be comprised of many subproblems within computer vision, such as edge detection, shadow detection, feature engineering, and machine learning using convolutional neural networks.  
<br/><br/>
![Image](https://cdn.vox-cdn.com/thumbor/GyrGqYz79xml_3VBPE-lXLf6zv0=/0x0:1592x1064/1200x0/filters:focal(0x0:1592x1064):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/18334536/ll_1.png)  

# Why?
The solution to this problem has many applications. One medical use could be to track the rehabilitation of psychiatric patients. Rather than having a doctor monitor the patient’s emotional stability, a live video feed could monitor them autonomously. Another application could help socially challenged people on live video calls. People with Asperger’s or Autism often struggle to understand others’ emotions. With the increase in video calls due to the pandemic, we could create a plug-in for Zoom to display the emotions of a video call’s participants. This way, people with social disabilities can recognize emotions easily. Yet another application could involve managing crowds during large events. The application could analyze the emotions of crowd members and determine the aggregate feeling of the crowd. Such a tool could be useful in predicting riots or determining successful displays at concerts. While there are many applications of emotion recognition, there are also serious ethical concerns. Namely, the ethical dilemmas related to mass surveillance also apply to emotion detection. Also, a person’s facial expression does not necessarily imply their emotional state. However, developing the tool is still an interesting problem that has the potential to help many people.

# Our Classification Method
We have found a dataset for emotion detection, FER-2013, and have implemented a baseline CNN with a test accuracy of 54%.

### CNN 
checklist: layers, activation functions, pooling, dropout

### CNN Demo
<iframe src="https://drive.google.com/file/d/1I2QBX-pL_4PUfm22vcZstMRKvJk77ac7/preview" width="640" height="480" allow="autoplay"></iframe>

### Training Data
We used a dataset from a Kaggle competition called [fer2013](https://www.kaggle.com/deadskull7/fer2013). The dataset is comprised of 48x48 pixel greyscale images of faces that are categorized as: 0=Angry, 1-Disgust, 2-Fear, 3-Happy, 4-Sad, 5-Surprise, and 6-Neutral. The data is represented as two columns, one with the numerical categorization from 0-6 and the other with the pixel values.  ![Image](https://production-media.paperswithcode.com/datasets/FER2013-0000001434-01251bb8_415HDzL.jpg)

### Difficulties
We wanted to implement a recurrent neural network, but we couldn’t find an accessible dataset that had images collected chronologically. As a result, we would gain no benefit from the RNNs ability to utilize temporal context. Instead, we attempted to use a Viola-Jones algorithm to extract facial features with a feed-forward network and then classify emotions based on the extracted features. While we were able to get the algorithm to give us facial features on test images, we ran into issues trying to use the Viola-Jones algorithm on our FER-2013 dataset. The algorithm currently isn’t able to detect our dataset as images of faces due to the dataset’s small resolution. With no other workable dataset we instead attempted to adjust our CNN's architecture in an attempt to improve our test accuracy.  
<br/><br/>
<img src="https://docs.google.com/drawings/d/e/2PACX-1vRtUYUgn7YYKJKeDuXUUFMV3MY3ewAR7B023GoLpV6RdyoL642vgxowOrj5BsHzOqseTqus-XSzKnc7/pub?w=455&amp;h=228">  
*left: Viola-Jones classifier ran on a test image, right: sample picture from FER-2013 dataset*



