import {Component, EventEmitter, Input, Output} from "@angular/core";
import {backdropStateTrigger, modalStateTrigger,} from "../../../animations/modal-animations";
import {CloseMode} from "../close-mode";

@Component({
  selector: 'app-error-modal',
  templateUrl: './error.modal.component.html',
  styleUrls: ['./error.modal.component.scss'],
  animations: [
    backdropStateTrigger,
    modalStateTrigger,
  ]
})
export class ErrorModalComponent {
  @Output()
  public closeModal: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public executeCustomAction: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  public closeButtonLabel: string;

  @Input()
  public customButtonLabel: string;

  public modalState: string = '*';
  private closeMode: CloseMode = CloseMode.CLOSE;

  public close(): void {
    this.modalState = 'void';
  }

  public customAction(): void {
    this.closeMode = CloseMode.CUSTOM_ACTION;
    this.modalState = 'void';
  }

  public onAnimationEnd() {
    if (this.closeMode === CloseMode.CUSTOM_ACTION) {
      this.executeCustomAction.emit();
    }
    if (this.modalState === 'void') {
      this.closeModal.emit();
    }
  }
}
