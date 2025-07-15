import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const posts = [
  { id: 1, title: 'Post 1', content: 'This is the content of post 1.' },
  { id: 2, title: 'Post 2', content: 'This is the content of post 2.' },
  { id: 3, title: 'Post 3', content: 'This is the content of post 3.' },
];

function PostList() {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography>{post.content}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PostList;
