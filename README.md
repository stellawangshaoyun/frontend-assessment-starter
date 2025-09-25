# Frontend Take-Home Assessment: Interactive Task Dashboard

**Time Allocation: 60 minutes**
**Tech Stack:** React 18+ • TypeScript • Vite • Tailwind CSS • Framer Motion

## Overview

Build an interactive task management component that demonstrates your frontend skills, design sensibility, and animation expertise. This assessment focuses on modern React patterns, TypeScript proficiency, and creating delightful user experiences through thoughtful animations and micro-interactions.

## Setup

We've provided a Vite + React + TypeScript starter with all dependencies configured:

```bash
git clone [repository-url]
cd frontend-assessment
npm install
npm run dev
```

**Included dependencies:**

- React 18.2+
- TypeScript 5+
- Tailwind CSS 3+
- Framer Motion 10+
- Radix UI primitives
- Lucide React icons

## Challenge: Task Dashboard Component

Create a task dashboard that allows users to manage their daily tasks with smooth, purposeful animations and excellent UX.

### Core Requirements (35 minutes)

**1. Task Interface & Types**

```typescript
interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: Date;
  createdAt: Date;
}
```

**2. Component Features**

- **Task List Display**: Show tasks in a clean, scannable layout
- **Add New Task**: Form with title, description, priority selection
- **Toggle Completion**: Click to mark tasks complete/incomplete
- **Delete Tasks**: Remove tasks with confirmation
- **Priority Indicators**: Visual distinction for low/medium/high priority
- **Task Counter**: Show total tasks and completed count

**3. State Management**

- Use React hooks for state management
- Implement proper TypeScript typing
- Handle form validation and error states
- Persist data in localStorage (bonus)

### Animation & Interaction Requirements (15 minutes)

**Required Animations (choose 3-4):**

- [ ] Smooth task entry/exit animations
- [ ] Completion state transitions with satisfying feedback
- [ ] Priority indicator animations (color transitions, pulses)
- [ ] Form submission feedback animations
- [ ] Hover states on interactive elements
- [ ] Loading states for async operations
- [ ] Staggered list animations on initial load
- [ ] Micro-interactions for delete confirmation

**Animation Guidelines:**

- Use Framer Motion for complex animations
- Timing: 200-400ms for most interactions
- Implement `prefers-reduced-motion` support
- Focus on purposeful, not decorative animations

### Design & UX Requirements

**Visual Design:**

- Clean, modern interface using Tailwind CSS
- Consistent spacing and typography hierarchy
- Appropriate color scheme with good contrast
- Responsive design (mobile-first approach)
- Clear visual feedback for all interactions

**User Experience:**

- Intuitive task creation flow
- Clear completion/deletion confirmations
- Accessible keyboard navigation
- Loading and error states
- Empty state handling

## Time Management Guide

**Planning Phase (10 minutes):**

- Review requirements and plan component structure
- Sketch basic layout and interaction flow
- Identify key animations and micro-interactions

**Core Implementation (35 minutes):**

- Set up TypeScript interfaces and types
- Build task list and form components
- Implement CRUD operations
- Add basic styling with Tailwind CSS

**Enhancement Phase (15 minutes):**

- Add Framer Motion animations
- Implement micro-interactions
- Polish visual design and spacing
- Test accessibility features

**Review Phase (5 minutes):**

- Test all functionality
- Review code quality
- Add brief documentation comments

## Evaluation Criteria

### Technical Implementation (40%)

- **React Patterns**: Component composition, hooks usage, performance
- **TypeScript**: Proper typing, interface design, type safety
- **Code Quality**: Organization, readability, best practices
- **Functionality**: All requirements working correctly

### Design Execution (35%)

- **Visual Hierarchy**: Clear information structure
- **Typography & Spacing**: Consistent, readable design
- **Color & Contrast**: Accessible color choices
- **Responsive Design**: Mobile-optimized layout

### Animation & Interaction (25%)

- **Purpose**: Animations enhance usability
- **Timing**: Appropriate duration and easing
- **Performance**: Smooth 60fps animations
- **Accessibility**: Respects motion preferences

## Bonus Points

- **Creative micro-interactions** that enhance user experience
- **Advanced TypeScript patterns** (generics, conditional types)
- **Performance optimizations** (memo, useMemo, useCallback)
- **Accessibility features** (ARIA labels, keyboard navigation)
- **Error boundaries** and robust error handling
- **Custom hooks** for reusable logic

## Submission Guidelines

**Include in your submission:**

1. **Completed code** with clear commit messages
2. **README file** with:
   - Setup instructions
   - Design decisions explanation
   - Animation choices rationale
   - Time breakdown (actual vs planned)
   - Known limitations or trade-offs
3. **Demo link** (Vercel/Netlify/Cloudflare)

**What we'll evaluate:**

- Code runs without errors
- All core requirements implemented
- Smooth, purposeful animations
- Clean, accessible design
- Quality of technical decisions
- Problem-solving approach

## Success Tips

✅ **Focus on core functionality first**
✅ **Make deliberate design decisions**
✅ **Use animations to enhance, not distract**
✅ **Write clean, typed code**
✅ **Test your implementation thoroughly**
✅ **Document your thought process**

⚠️ **Avoid over-engineering**
⚠️ **Don't sacrifice functionality for flashy effects**
⚠️ **Remember the 1-hour constraint**

## Questions?

If you encounter any technical issues with the starter code or have clarifying questions about requirements, email us within the first 15 minutes. We want you to succeed!

---

**Good luck! We're excited to see your approach to building beautiful, functional user interfaces.**
