from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import torch
from torchvision import models, transforms
from torchvision.models.detection import FasterRCNN_ResNet50_FPN_Weights

app = Flask(__name__)
CORS(app)

# Load YOLO model (example with a pre-trained model)
weights = FasterRCNN_ResNet50_FPN_Weights.COCO_V1
model = models.detection.fasterrcnn_resnet50_fpn(weights=weights)
model.eval()

@app.route('/analyze', methods=['POST'])
def analyze_video():
    file = request.files['video']
    # Process video with OpenCV and YOLO
    # Example: Read video frames and perform object detection
    cap = cv2.VideoCapture(file)
    results = []
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        # Convert frame to tensor and perform detection
        transform = transforms.Compose([transforms.ToTensor()])
        frame_tensor = transform(frame)
        detections = model([frame_tensor])[0]
        results.append(detections)
    cap.release()
    return jsonify(results)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1001, debug=True)
