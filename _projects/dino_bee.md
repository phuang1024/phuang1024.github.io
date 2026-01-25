---
layout: page
title: Bee Thorax Detection with DINO
img: assets/img/dino_bee/pca.jpg
importance: 1
category: work
related_publications: false
---

Image segmentation of honeybees using DINO:

This past year, I have been working in WaggleNet, a student
run research group at UIUC. We develop technology for beekeepers
and honeybee researchers.

Our Bee Tagging project creates a machine that automatically places
tags (small QR codes) on the thoraxes of bees. This allows
researchers to track their hive population.

In the software team, we developed a neural network that computes
the location of the bees' thorax in an image. We used DINOv2, a
ViT model created by Facebook AI; and a small convolutional head
trained for this specific task.

DINOv2 was trained on a large number of unlabeled images. Through
concept-invariant image transforms, the network learns visually
salient features.
We take one of the intermediate layers (which is a 384 dimensional
patch-aligned feature) and feed it into a convolutional head with
only 1K parameters.
We train the convolutional head on a small set of 100 manually
labeled thoraxes, and the model is able to generalize on images
from a different source.

Using a large pretrained model allows the network to generalize
easily, and using a small head makes our training process much easier.

Attached are a 3 dimensional PCA visualization of a DINO intermediate
layer; the prediction and ground truth on a validation sample; and
the prediction in a completely different context.

![](/assets/img/dino_bee/pca.jpg)

![](/assets/img/dino_bee/result.jpg)

![](/assets/img/dino_bee/generalize.jpg)
