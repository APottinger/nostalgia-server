import express from 'express';
import mongoose from 'mongoose';

import Post from '../models/post.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await Post.find();
        console.log(postMessages)
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
        const post = req.body;
        const newPost = new Post(post);

        try {
            await newPost.save();
            res.status(201).json(newPost);
        } catch (error) {
            res.status(409).json({ message: error.message })
        }
}