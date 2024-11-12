app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    const db=getdb();
    console("data is getting load")
    db.collection('products').find()
    const id=db.find(i=>i.id===66fa82c542f18dd9e0093a50);
});

// 66fa82c542f18dd9e0093a50