# 🎨 Spline Character Creation Guide

## Quick Start (5 minutes to first character!)

### Option 1: Use a Template (Recommended for Beginners)
1. **Go to Spline**: Visit [spline.design](https://spline.design)
2. **Sign Up/Login**: Create a free account
3. **Browse Templates**: Click "Community" → Search for "character" or "mascot"
4. **Pick One**: Choose a character you like (e.g., robot, astronaut, developer)
5. **Remix It**: Click "Remix" to make it your own
6. **Customize**: Change colors, scale, add accessories
7. **Export**: Click "Export" → "Code Export" → Copy the URL
8. **Done!** Paste the URL into your CodeCompanion component

### Option 2: Create from Scratch (10-15 minutes)
1. **Open Spline**: Go to [spline.design](https://spline.design)
2. **New Project**: Click "New File"
3. **Add Shapes**: Use the left toolbar
   - Click sphere for head
   - Add cylinders for body/limbs
   - Use cubes for accessories
4. **Style It**:
   - Click objects to select
   - Right panel: Change color, material
   - Try "Glass", "Metal", or "Matte" materials
5. **Add Face**:
   - Use small spheres for eyes
   - Add a curve for mouth
   - Position using move tool
6. **Animate**:
   - Click object → "States" tab (right panel)
   - Create states: "Idle", "Greeting", "Thinking"
   - Keyframe animations for each state
7. **Export**:
   - Click "Export" → "Code Export"
   - Copy the `.splinecode` URL
   - Save for use in React

## Character Design Tips

### Personality Through Design
- **Friendly**: Rounded shapes, warm colors (orange, yellow)
- **Tech-Savvy**: Sharp edges, cyan/blue hues, metallic materials
- **Playful**: Asymmetric design, bright colors, wobbly animations
- **Professional**: Clean lines, muted colors, subtle animations

### Recommended Features
1. **Emotive Eyes**: Large, expressive (2 spheres or simple shapes)
2. **Simple Body**: 3-5 shapes max (less is more!)
3. **Accessories**: Headphones, glasses, or laptop for developer vibe
4. **Color Scheme**: Match your portfolio (cyan #00d9ff, pink #ff6b9d)

### Animation States to Create
Create these states in Spline for full functionality:

1. **Idle** (Default)
   - Gentle breathing (scale Y: 1 → 1.02 → 1)
   - Subtle rotation (rotate Y: -5° → 5°)
   - Blink eyes occasionally

2. **Greeting**
   - Wave arm up and down
   - Tilt head slightly
   - Scale up 10% briefly

3. **Thinking**
   - Tilt head to side
   - Hand to chin gesture
   - Slow rotation

4. **Coding**
   - Hands in typing position
   - Lean forward slightly
   - Fast head bob

5. **Celebrating**
   - Jump up and down
   - Arms raised
   - Spin 360°

## Integration Steps

### Step 1: Get Your Spline URL
After exporting, you'll get a URL like:
```
https://prod.spline.design/abc123xyz/scene.splinecode
```

### Step 2: Add to Your Project
You have two options:

**Option A: Use Public URL** (Easiest)
```tsx
<CodeCompanion splineUrl="https://prod.spline.design/YOUR_ID/scene.splinecode" />
```

**Option B: Download and Host Locally**
1. Download the `.splinecode` file from Spline
2. Place in `/public/character.splinecode`
3. Use local path:
```tsx
<CodeCompanion splineUrl="/character.splinecode" />
```

### Step 3: Test It
```tsx
// In any component
import { CodeCompanion } from '@/components/3d';

export default function TestPage() {
  return (
    <div className="w-full h-screen">
      <CodeCompanion
        splineUrl="YOUR_URL_HERE"
        state="greeting"
        scale={1.2}
      />
    </div>
  );
}
```

## Recommended Free Spline Characters

If you want to use pre-made characters, here are some great starting points:

1. **Robot Characters** (Tech vibe)
   - Search: "robot developer"
   - Look for: Articulated arms, screen displays

2. **Astronaut/Space Theme** (Explorer vibe)
   - Search: "astronaut character"
   - Look for: Helmet, floating pose

3. **Geometric/Abstract** (Modern vibe)
   - Search: "geometric character"
   - Look for: Minimalist, colorful

4. **Cute Mascot** (Friendly vibe)
   - Search: "cute mascot 3d"
   - Look for: Round shapes, expressive

## Troubleshooting

### Character doesn't load
- ✅ Check URL is correct
- ✅ Make sure Spline scene is published (not draft)
- ✅ Check browser console for errors
- ✅ Try with SimpleCharacter first to test setup

### Character is too big/small
- Adjust `scale` prop: `<CodeCompanion scale={0.8} />`
- Or adjust in Spline editor before exporting

### Animations don't work
- Make sure you created "States" in Spline
- States should be named: idle, greeting, thinking, etc.
- Test each state in Spline preview before exporting

### Performance issues
- Reduce polygon count in Spline (use simpler shapes)
- Disable shadows in Spline export settings
- Use `SimpleCharacter` for mobile devices

## Pro Tips

1. **Start Simple**: Begin with basic shapes, add detail later
2. **Test Early**: Export and test in your app frequently
3. **Consistent Style**: Match your portfolio's color scheme
4. **Mobile First**: Design characters that work at small sizes
5. **Personality**: Give your character a name and backstory!

## Next Steps

Once you have your character:
1. ✅ Place Spline URL in `CodeCompanion` component
2. ✅ Test in Hero section (next step in our tutorial)
3. ✅ Add to different sections with different states
4. ✅ Create interactions (hover, click, scroll)
5. ✅ Fine-tune animations and timing

## Need Help?

- **Spline Docs**: [docs.spline.design](https://docs.spline.design)
- **Community**: [spline.community](https://spline.community)
- **YouTube**: Search "Spline character tutorial"
- **Alternative**: Use `SimpleCharacter` (already working!) while learning

---

**Ready?** Go create your character and come back with the URL! 🚀
While you're doing that, I can start working on the Hero section transformation.
