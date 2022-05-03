import {
  AnimationTriggerMetadata,
  animate,
  style,
  transition,
  trigger
} from "@angular/animations";

export enum ModalAnimationState {
  Void = '*',
}

export const ModalAnimationStates: typeof ModalAnimationState = ModalAnimationState;

export const backdropStateTrigger: AnimationTriggerMetadata = trigger('backdropShowState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('300ms ease-out')
  ]),
  transition(':leave', [
    animate('300ms ease-out',
      style({
        opacity: 0
      })
    )
  ])
]);

export const modalStateTrigger: AnimationTriggerMetadata = trigger('modalShowState', [
  transition(':enter', [
    style({
      opacity: 0,
      top: '55%',
    }),
    animate('300ms ease-out')
  ]),
  transition(':leave', [
    animate('300ms ease-out',
      style({
        opacity: 0,
        top: '55%',
      })
    )
  ])
])
