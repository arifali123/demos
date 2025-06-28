import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import React from 'react';

import { ScrollTransition3D } from '../animations/3d-scroll-transition';
import { ActionTray } from '../animations/action-tray';
import { AddToCart } from '../animations/add-to-cart';
import { AirbnbSlider } from '../animations/airbnb-slider';
import { AlertDrawer } from '../animations/alert-drawer';
import { Animated3DParallax } from '../animations/animated-3d-parallax';
import { AnimatedClipBox } from '../animations/animated-clip-box';
import { AnimatedCountText } from '../animations/animated-count-text';
import { AnimatedGridList } from '../animations/animated-grid-list';
import { AnimatedIndicatorList } from '../animations/animated-indicator-list';
import { AtlasButton } from '../animations/atlas-button';
import { AudioPlayer } from '../animations/audioplayer';
import { BalanceSlider } from '../animations/balance-slider';
import { BezierCurveOutline } from '../animations/bezier-curve-outline';
import { BlurCircles } from '../animations/blur-circles';
import { BlurredBottomBar } from '../animations/blurred-bottom-bar';
import { BlurredScroll } from '../animations/blurred-scroll';
import { BottomBarSkia } from '../animations/bottom-bar-skia';
import { CardShaderReflections } from '../animations/card-shader-reflections';
import { CheckboxInteractions } from '../animations/checkbox-interactions';
import { CircularCarousel } from '../animations/circular-carousel';
import { ClerkToast } from '../animations/clerk-toast';
import { ClockTimePicker } from '../animations/clock-time-picker';
import { ColorCarousel } from '../animations/color-carousel';
import { ComposableTextScreen } from '../animations/composable-text';
import { CoverflowCarousel } from '../animations/coverflow-carousel';
import { CubertoSlider } from '../animations/cuberto-slider';
import { CustomDrawer } from '../animations/custom-drawer';
import { DeleteButton } from '../animations/delete-button';
import { DotSheet } from '../animations/dot-sheet';
import { DragToSort } from '../animations/drag-to-sort';
import { DurationSlider } from '../animations/duration-slider';
import { DynamicBlurTabs } from '../animations/dynamic-blur-tabs';
import { DynamicTabIndicatorContainer } from '../animations/dynamic-tab-indicator';
import { EmailDemo } from '../animations/email-demo';
import { EmptyQRCode } from '../animations/empty-qrcode';
import { EverybodyCanCook } from '../animations/everybody-can-cook';
import { ExclusionTabs } from '../animations/exclusion-tabs';
import { ExpandableMiniPlayer } from '../animations/expandable-mini-player';
import { FamilyNumberInput } from '../animations/family-number-input';
import { FibonacciShader } from '../animations/fibonacci-shader';
import { FibonacciShaderGrid } from '../animations/fibonacci-shader-grid';
import { FloatingBottomBar } from '../animations/floating-bottom-bar';
import { FloatingModal } from '../animations/floating-modal';
import { FluidSlider } from '../animations/fluid-slider';
import { FluidTabInteraction } from '../animations/fluid-tab-interaction';
import { FourierVisualizer } from '../animations/fourier-visualizer';
import { FractalGlass } from '../animations/fractal-glass';
import { GeometryButton } from '../animations/geometry-button';
import { GitHubOnboarding } from '../animations/github-onboarding';
import { GLTransitions } from '../animations/gl-transitions';
import { GridVisualizer } from '../animations/grid-visualizer';
import { ImageCropper } from '../animations/image-cropper';
import { IMessageStack } from '../animations/imessage-stack';
import { InfiniteCarousel } from '../animations/infinite-carousel';
import { InteractionAppearance } from '../animations/interaction-appearance';
import { iOSHomeGrid } from '../animations/ios-home-grid';
import { LinearTabInteraction } from '../animations/linear-tab-interaction';
import { LoadingButton } from '../animations/loading-button';
import { Metaball } from '../animations/metaball';
import { MilesBarChart } from '../animations/miles-bar-chart';
import { MobileInput } from '../animations/mobile-input';
import { MotionBlur } from '../animations/motion-blur';
import { PaperFolding } from '../animations/paper-folding';
import { ParticlesButton } from '../animations/particles-button';
import { PomodoroTimer } from '../animations/pomodoro-timer';
import { PopupHandler } from '../animations/popup-handler';
import { PrequelSlider } from '../animations/prequel-slider';
import { QRCodeGenerator } from '../animations/qrcode';
import { RadarChartContainer } from '../animations/radar-chart';
import { RecordButton } from '../animations/record-button';
import { ScrollProgress } from '../animations/scroll-progress';
import { ScrollableBottomSheet } from '../animations/scrollable-bottom-sheet';
import { SelectableGridList } from '../animations/selectable-grid-list';
import { ShakeToDeleteAnimation } from '../animations/shake-to-delete';
import { SharedTransitions } from '../animations/shared-transition';
import { SkiaBottomSheet } from '../animations/skia-bottom-sheet';
import { SkiaColorPicker } from '../animations/skia-color-picker';
import { SlideToReveal } from '../animations/slide-to-reveal';
import { SmoothDropdown } from '../animations/smooth-dropdown';
import { Snake } from '../animations/snake';
import { Spiral } from '../animations/spiral';
import { SplitButton } from '../animations/split-button';
import { StackedBottomSheet } from '../animations/stacked-bottom-sheet';
import { StackedList } from '../animations/stacked-list';
import { StackedModals } from '../animations/stacked-modals';
import { StaggeredCardNumber } from '../animations/staggered-card-number';
import { SteddyGraphInteraction } from '../animations/steddy-graph-interaction';
import { Steps } from '../animations/steps';
import { StoryList } from '../animations/story-list';
import { Sudoku } from '../animations/sudoku';
import { SwipeCards } from '../animations/swipe-cards';
import { TabNavigation } from '../animations/tab-navigation';
import { TelegramThemeSwitch } from '../animations/telegram-theme-switch';
import { ThemeCanvasAnimation } from '../animations/theme-canvas-animation';
import { ThreadsHoloTicket } from '../animations/threads-holo-ticket/src';
import { Toast } from '../animations/toast';
import { TwitterTabBar } from '../animations/twitter-tab-bar';
import { TwodosSlide } from '../animations/twodos-slide';
import { VerificationCode } from '../animations/verification-code';
import { VerificationCodeFace } from '../animations/verification-code-face';
import { WheelPicker } from '../animations/wheel-picker';

import { IosHomeBouncy } from '../animations/ios-home-bouncy';
import { TimeMachine } from '../animations/time-machine';
import { withCustomBackIcon } from './with-custom-back-icon-hoc';

const ICON_SIZE = 24;
const ICON_COLOR = 'white';
const DefaultIconProps = {
  size: ICON_SIZE,
  color: ICON_COLOR,
};

export const Screens = [
  {
    name: 'Mobile Input',
    route: 'MobileInput',
    component: MobileInput,
    backIconDark: false,
    theme: 'dark',
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Swipe Cards',
    route: 'SwipeCards',
    component: SwipeCards,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="cards" {...DefaultIconProps} />,
  },
  {
    name: 'Spiral',
    route: 'Spiral',
    component: Spiral,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="math-compass" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Scroll Progress',
    route: 'ScrollProgress',
    component: ScrollProgress,
    backIconDark: false,
    theme: 'dark',
    icon: () => <Feather name="percent" {...DefaultIconProps} />,
  },
  {
    name: 'Animated Grid List',
    route: 'AnimatedGridList',
    component: AnimatedGridList,
    backIconDark: false,
    theme: 'dark',
    icon: () => <Feather name="grid" {...DefaultIconProps} />,
  },
  {
    name: 'Floating Bottom Bar',
    route: 'FloatingBottomBar',
    component: FloatingBottomBar,
    theme: 'mixed',
    icon: () => <MaterialIcons name="highlight" {...DefaultIconProps} />,
  },
  {
    name: 'Animated Clip Box',
    route: 'AnimatedClipBox',
    component: AnimatedClipBox,
    theme: 'light',
    icon: () => <MaterialIcons name="crop-square" {...DefaultIconProps} />,
  },
  {
    name: 'Theme Canvas Animation',
    route: 'ThemeCanvasAnimation',
    component: ThemeCanvasAnimation,
    theme: 'dark',
    icon: () => <MaterialIcons name="color-lens" {...DefaultIconProps} />,
  },
  {
    name: 'Add to Cart',
    route: 'AddToCart',
    component: AddToCart,
    theme: 'light',
    icon: () => (
      <MaterialIcons name="add-shopping-cart" {...DefaultIconProps} />
    ),
  },
  {
    name: 'BottomBarSkia',
    route: 'BottomBarSkia',
    component: BottomBarSkia,
    theme: 'dark',
    icon: () => <Feather name="tablet" {...DefaultIconProps} />,
  },
  {
    name: 'Cuberto Slider',
    route: 'CubertoSlider',
    component: CubertoSlider,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="balloon" {...DefaultIconProps} />,
  },
  {
    name: 'Metaball',
    route: 'Metaball',
    component: Metaball,
    backIconDark: false,
    theme: 'dark',
    icon: () => <Ionicons name="tennisball" {...DefaultIconProps} />,
  },
  {
    name: 'Shared Transitions',
    route: 'SharedTransitions',
    component: SharedTransitions,
    alert: true,
    theme: 'light',
    icon: () => (
      <MaterialIcons name="sync" {...DefaultIconProps} color={'yellow'} />
    ),
  },
  {
    name: 'Story List',
    route: 'StoryList',
    component: StoryList,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="book-open" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Dynamic Tab Indicator',
    route: 'DynamicTabIndicator',
    component: DynamicTabIndicatorContainer,
    iconMarginTop: 50,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialIcons name="tab" {...DefaultIconProps} />,
  },
  {
    name: 'Blur Circles',
    route: 'BlurCircles',
    component: BlurCircles,
    theme: 'light',
    icon: () => <MaterialIcons name="blur-on" {...DefaultIconProps} />,
  },
  {
    name: 'Smooth Dropdown',
    route: 'SmoothDropdown',
    component: SmoothDropdown,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialIcons name="arrow-drop-down" {...DefaultIconProps} />,
  },
  {
    name: 'Skia BottomSheet',
    route: 'SkiaBottomSheet',
    component: SkiaBottomSheet,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="card" {...DefaultIconProps} />,
  },
  {
    name: 'Floating Modal',
    route: 'FloatingModal',
    component: FloatingModal,
    theme: 'dark',
    icon: () => <Entypo name="popup" {...DefaultIconProps} />,
  },
  {
    name: 'AudioPlayer',
    route: 'AudioPlayer',
    component: AudioPlayer,
    backIconDark: false,
    theme: 'dark',
    icon: () => <Ionicons name="barcode" {...DefaultIconProps} />,
  },
  {
    name: 'Color Carousel',
    route: 'ColorCarousel',
    component: ColorCarousel,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="palette" {...DefaultIconProps} />,
  },
  {
    name: 'Animated 3D Parallax',
    route: 'Animated3DParallax',
    component: Animated3DParallax,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="twitter" {...DefaultIconProps} />,
  },
  {
    name: 'Fluid Slider',
    route: 'FluidSlider',
    component: FluidSlider,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="water" {...DefaultIconProps} />,
  },
  {
    name: 'Animated Indicator List',
    route: 'AnimatedIndicatorList',
    component: AnimatedIndicatorList,
    iconMarginTop: 40,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons
        name="format-list-bulleted"
        {...DefaultIconProps}
      />
    ),
  },
  {
    name: 'Radar Chart',
    route: 'RadarChart',
    component: RadarChartContainer,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="radar" {...DefaultIconProps} />,
  },
  {
    name: 'Image Cropper',
    route: 'ImageCropper',
    component: ImageCropper,
    backIconDark: false,
    iconMarginTop: 40,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="crop" {...DefaultIconProps} />,
  },
  {
    name: 'Custom Drawer',
    route: 'CustomDrawer',
    component: CustomDrawer,
    iconMarginTop: 30,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="menu" {...DefaultIconProps} />,
  },
  {
    name: 'Selectable Grid List',
    route: 'SelectableGridList',
    component: SelectableGridList,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="select-all" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Animated Count Text',
    route: 'AnimatedCountText',
    component: AnimatedCountText,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="counter" {...DefaultIconProps} />,
  },
  {
    name: 'QR Code Generator',
    route: 'QRCodeGenerator',
    component: QRCodeGenerator,
    backIconDark: false,
    alert: true,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons
        name="qrcode"
        {...DefaultIconProps}
        color={'yellow'}
      />
    ),
  },
  {
    name: 'Popup Handler',
    route: 'PopupHandler',
    component: PopupHandler,
    alert: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons
        name="blur-radial"
        {...DefaultIconProps}
        color={'yellow'}
      />
    ),
  },
  {
    name: 'Twitter Tab Bar',
    route: 'TwitterTabBar',
    component: TwitterTabBar,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="twitter" {...DefaultIconProps} />,
  },
  {
    name: 'Circular Carousel',
    route: 'CircularCarousel',
    component: CircularCarousel,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="circle" {...DefaultIconProps} />,
  },
  {
    name: 'Split Button',
    route: 'SplitButton',
    component: SplitButton,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="call-split" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Telegram Theme Switch',
    route: 'TelegramThemeSwitch',
    component: TelegramThemeSwitch,
    backIconDark: false,
    alert: true,
    theme: 'dark',
    icon: () => (
      <FontAwesome name="telegram" {...DefaultIconProps} color={'yellow'} />
    ),
  },
  {
    name: 'Fourier Visualizer',
    route: 'FourierVisualizer',
    component: FourierVisualizer,
    theme: 'dark',
    icon: () => <Octicons name="paintbrush" {...DefaultIconProps} />,
  },
  {
    name: 'GitHub Onboarding',
    route: 'GitHubOnboarding',
    component: GitHubOnboarding,
    backIconDark: false,
    theme: 'dark',
    icon: () => <Octicons name="mark-github" {...DefaultIconProps} />,
  },
  {
    name: 'Loading Button',
    route: 'LoadingButton',
    component: LoadingButton,
    theme: 'light',
    icon: () => <AntDesign name="loading1" {...DefaultIconProps} />,
  },
  {
    name: 'Scrollable Bottom Sheet',
    route: 'ScrollableBottomSheet',
    component: ScrollableBottomSheet,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="arrow-up" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Skia Color Picker',
    route: 'SkiaColorPicker',
    component: SkiaColorPicker,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="palette" {...DefaultIconProps} />,
  },
  {
    name: 'Blurred Scroll',
    route: 'BlurredScroll',
    component: BlurredScroll,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="blur" {...DefaultIconProps} />,
  },
  {
    name: 'AirBnb Slider',
    route: 'AirBnbSlider',
    component: AirbnbSlider,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="counter" {...DefaultIconProps} />,
  },
  {
    name: 'Steddy Graph Interaction',
    route: 'SteddyGraphInteraction',
    component: SteddyGraphInteraction,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="chart-line" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Action Tray',
    route: 'ActionTray',
    component: ActionTray,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="card" {...DefaultIconProps} />,
  },
  {
    name: 'Toast',
    route: 'Toast',
    component: Toast,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="message" {...DefaultIconProps} />,
  },
  {
    name: 'Slide to Reveal',
    route: 'SlideToReveal',
    component: SlideToReveal,
    backIconDark: false,
    theme: 'dark',
    icon: () => <Octicons name="number" {...DefaultIconProps} />,
  },
  {
    name: 'Blurred Bottom Bar',
    route: 'BlurredBottomBar',
    component: BlurredBottomBar,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="blur-linear" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Fractal Glass',
    route: 'FractalGlass',
    component: FractalGlass,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="mirror" {...DefaultIconProps} />,
  },
  {
    name: 'Drag to Sort',
    route: 'DragToSort',
    component: DragToSort,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="sort" {...DefaultIconProps} />,
  },
  {
    name: 'Fibonacci Shader',
    route: 'FibonacciShader',
    component: FibonacciShader,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="sphere" {...DefaultIconProps} />,
  },
  {
    name: 'Family Number Input',
    route: 'FamilyNumberInput',
    component: FamilyNumberInput,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="dots-grid" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Balance Slider',
    route: 'BalanceSlider',
    component: BalanceSlider,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="scale-balance" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Fibonacci Shader Grid',
    route: 'FibonacciShaderGrid',
    component: FibonacciShaderGrid,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="grid-large" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Verification Code',
    route: 'VerificationCode',
    component: VerificationCode,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="security" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Email Demo',
    route: 'EmailDemo',
    component: EmailDemo,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="delete" {...DefaultIconProps} />,
  },
  {
    name: '3D Scroll Transition',
    route: 'ScrollTransition3D',
    component: ScrollTransition3D,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="rotate-3d" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Staggered Card Number',
    route: 'StaggeredCardNumber',
    component: StaggeredCardNumber,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons
        name="credit-card-outline"
        {...DefaultIconProps}
      />
    ),
  },
  {
    name: 'Stacked Bottom Sheet',
    route: 'StackedBottomSheet',
    component: StackedBottomSheet,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="card" {...DefaultIconProps} />,
  },
  {
    name: 'GL Transitions',
    route: 'GLTransitions',
    component: GLTransitions,
    iconMarginTop: 100,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="transition-masked" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Prequel Slider',
    route: 'PrequelSlider',
    component: PrequelSlider,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons
        name="picture-in-picture-bottom-right"
        {...DefaultIconProps}
      />
    ),
  },
  {
    name: 'Empty QR Code',
    route: 'EmptyQRCode',
    component: EmptyQRCode,
    backIconDark: true,
    alert: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons
        name="qrcode"
        {...DefaultIconProps}
        color={'yellow'}
      />
    ),
  },
  {
    name: 'Infinite Carousel',
    route: 'InfiniteCarousel',
    component: InfiniteCarousel,
    backIconDark: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons
        name="view-carousel-outline"
        {...DefaultIconProps}
      />
    ),
  },
  {
    name: 'Twodos Slide',
    route: 'TwodosSlide',
    component: TwodosSlide,
    backIconDark: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="pan-right" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Wheel Picker',
    route: 'WheelPicker',
    component: WheelPicker,
    backIconDark: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="ship-wheel" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Stacked List',
    route: 'StackedList',
    component: StackedList,
    backIconDark: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons
        name="notification-clear-all"
        {...DefaultIconProps}
      />
    ),
  },
  {
    name: 'Geometry Button',
    route: 'GeometryButton',
    component: GeometryButton,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="sphere" {...DefaultIconProps} />,
  },
  {
    name: 'Record Button',
    route: 'RecordButton',
    component: RecordButton,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="record" {...DefaultIconProps} />,
  },
  {
    name: 'Grid Visualizer',
    route: 'GridVisualizer',
    component: GridVisualizer,
    backIconDark: false,
    alert: true,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons
        name="grid"
        {...DefaultIconProps}
        color={'yellow'}
      />
    ),
  },
  {
    name: 'iMessageStack',
    route: 'IMessageStack',
    component: IMessageStack,
    backIconDark: false,
    alert: true,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons
        name="gesture-swipe"
        {...DefaultIconProps}
        color={'yellow'}
      />
    ),
  },
  {
    name: 'Atlas Button',
    route: 'AtlasButton',
    component: AtlasButton,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="react" {...DefaultIconProps} />,
  },
  {
    name: 'Checkbox Interactions',
    route: 'CheckboxInteractions',
    component: CheckboxInteractions,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="checkbox-outline" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Interaction Appearance',
    route: 'InteractionAppearance',
    component: InteractionAppearance,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="theme-light-dark" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Dot Sheet',
    route: 'DotSheet',
    component: DotSheet,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="paperclip" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Coverflow Carousel',
    route: 'CoverflowCarousel',
    component: CoverflowCarousel,
    backIconDark: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="view-carousel" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Paper Folding',
    route: 'PaperFolding',
    component: PaperFolding,
    backIconDark: true,
    alert: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons
        name="paper-roll"
        {...DefaultIconProps}
        color={'yellow'}
      />
    ),
  },
  {
    name: 'Miles Bar Chart',
    route: 'MilesBarChart',
    component: MilesBarChart,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="chart-bar" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Steps',
    route: 'Steps',
    component: Steps,
    backIconDark: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="step-forward" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Pomodoro Timer',
    route: 'PomodoroTimer',
    component: PomodoroTimer,
    backIconDark: false,
    theme: 'dark',
    icon: () => (
      <MaterialCommunityIcons name="timer-outline" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Exclusion Tabs',
    route: 'ExclusionTabs',
    component: ExclusionTabs,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="tab" {...DefaultIconProps} />,
  },
  {
    name: 'Clerk Toast',
    route: 'ClerkToast',
    component: ClerkToast,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="toaster" {...DefaultIconProps} />,
  },
  {
    name: 'Duration Slider',
    route: 'DurationSlider',
    component: DurationSlider,
    backIconDark: true,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="timer" {...DefaultIconProps} />,
  },
  {
    name: 'Alert Drawer',
    route: 'AlertDrawer',
    component: AlertDrawer,
    backIconDark: true,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="alert" {...DefaultIconProps} />,
  },
  {
    name: 'Motion Blur',
    route: 'MotionBlur',
    component: MotionBlur,
    backIconDark: true,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="blur" {...DefaultIconProps} />,
  },
  {
    name: 'Linear Tab Interaction',
    route: 'LinearTabInteraction',
    component: LinearTabInteraction,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="tab" {...DefaultIconProps} />,
  },
  {
    name: 'Delete Button',
    route: 'DeleteButton',
    component: DeleteButton,
    backIconDark: true,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="delete" {...DefaultIconProps} />,
  },
  {
    name: 'Dynamic Blur Tabs',
    route: 'DynamicBlurTabs',
    component: DynamicBlurTabs,
    backIconDark: true,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="blur" {...DefaultIconProps} />,
  },
  {
    name: 'Snake',
    route: 'Snake',
    component: Snake,
    backIconDark: true,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="snake" {...DefaultIconProps} />,
  },
  {
    name: 'Expandable Mini Player',
    route: 'ExpandableMiniPlayer',
    component: ExpandableMiniPlayer,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="music" {...DefaultIconProps} />,
  },
  {
    name: 'Bezier Curve Outline',
    route: 'BezierCurveOutline',
    component: BezierCurveOutline,
    backIconDark: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="vector-bezier" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Tab Navigation',
    route: 'TabNavigation',
    component: TabNavigation,
    backIconDark: true,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="tab" {...DefaultIconProps} />,
  },
  {
    name: 'Stacked Modals',
    route: 'StackedModals',
    component: StackedModals,
    backIconDark: true,
    theme: 'light',
    icon: () => <MaterialCommunityIcons name="card" {...DefaultIconProps} />,
  },
  {
    name: 'Verification Code Face',
    route: 'VerificationCodeFace',
    component: VerificationCodeFace,
    backIconDark: true,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="baby-face" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Everybody Can Cook',
    route: 'EverybodyCanCook',
    component: EverybodyCanCook,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="food" {...DefaultIconProps} />,
  },
  {
    name: 'Threads Holo Ticket',
    route: 'ThreadsHoloTicket',
    component: ThreadsHoloTicket,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="ticket" {...DefaultIconProps} />,
  },
  {
    name: 'Fluid Tab Interaction',
    route: 'FluidTabInteraction',
    component: FluidTabInteraction,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="blur" {...DefaultIconProps} />,
  },
  {
    name: 'Shake to Delete',
    route: 'ShakeToDelete',
    component: ShakeToDeleteAnimation,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="shaker" {...DefaultIconProps} />,
  },
  {
    name: 'Composable Text',
    route: 'ComposableText',
    component: ComposableTextScreen,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="text" {...DefaultIconProps} />,
  },
  {
    name: 'Card Shader Reflections',
    route: 'CardShaderReflections',
    component: CardShaderReflections,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="card" {...DefaultIconProps} />,
  },
  {
    name: 'Clock Time Picker',
    route: 'ClockTimePicker',
    component: ClockTimePicker,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="clock" {...DefaultIconProps} />,
  },
  {
    name: 'Sudoku',
    route: 'Sudoku',
    component: Sudoku,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="grid" {...DefaultIconProps} />,
  },
  {
    name: 'Particles Button',
    route: 'ParticlesButton',
    component: ParticlesButton,
    backIconDark: false,
    theme: 'dark',
    icon: () => <MaterialCommunityIcons name="atom" {...DefaultIconProps} />,
  },
  {
    name: 'iOS Home Grid',
    route: 'iOSHomeGrid',
    component: iOSHomeGrid,
    backIconDark: false,
    theme: 'light',
    icon: () => (
      <MaterialCommunityIcons name="grid-large" {...DefaultIconProps} />
    ),
  },
  {
    name: 'Time Machine',
    route: 'TimeMachine',
    component: TimeMachine,
    backIconDark: false,
    icon: () => (
      <MaterialCommunityIcons name="timelapse" {...DefaultIconProps} />
    ),
  },
  {
    name: 'iOS Home Bouncy',
    route: 'IosHomeBouncy',
    component: IosHomeBouncy,
    backIconDark: false,
    icon: () => <MaterialCommunityIcons name="home" {...DefaultIconProps} />,
  },
]
  .map((item, index) => {
    return {
      ...item,
      id: index,
      component: withCustomBackIcon({
        Component: item.component,
        screenName: item.name,
        backIconDark: item.backIconDark,
        iconMarginTop: item.iconMarginTop,
        alert: item.alert,
      }),
    };
  })
  .reverse();
