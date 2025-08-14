import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  GoabContainer,
  GoabFileUploadInput,
  GoabFileUploadCard,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabBlock,
  GoabCard,
  GoabFormItem
} from '@abgov/angular-components';
import { GoabFileUploadInputOnSelectFileDetail } from '@abgov/ui-components-common';

interface Upload {
  file: File;
  uploader: MockUploader;
}

interface Uploader {
  upload: (url: string | ArrayBuffer) => void;
  abort: () => void;
}

class MockUploader implements Uploader {
  public onprogress: (percent: number) => void = (_: number) => {};
  public onabort: () => void = () => {};
  public onfail: (err: string) => void = (_: string) => {};
  public oncomplete: () => void = () => {};

  upload(_url: string | ArrayBuffer) {
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        this.oncomplete();
      }
      this.onprogress(progress);
    }, 500);
  }

  abort() {
    this.onabort();
  }
}

@Component({
  selector: 'app-file-uploader-examples',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoabContainer,
    GoabFileUploadInput,
    GoabFileUploadCard,
    GoabSpacer,
    GoabButton,
    GoabButtonGroup,
    GoabBlock,
    GoabCard,
    GoabFormItem
  ],
  template: `
    <goab-container>
      <h1>File Uploader Component Examples</h1>
      <p>Help users select and upload files with progress tracking and validation.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Basic File Uploader Examples</h2>
      <p>Simple file uploader examples with different variants and states:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Drag and Drop Variant</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Upload Documents">
          <goab-file-upload-input
            variant="dragdrop"
            maxFileSize="10MB"
            accept=".pdf,.doc,.docx"
            (onSelectFile)="uploadFile($event, 'basic-dragdrop')">
          </goab-file-upload-input>
          <goab-file-upload-card
            *ngFor="let upload of basicUploads.dragdrop"
            [type]="upload.file.type"
            [size]="upload.file.size"
            [filename]="upload.file.name"
            [progress]="progressList[upload.file.name]"
            [error]="errorList[upload.file.name]"
            (onDelete)="deleteFile(upload, 'basic-dragdrop')"
            (onCancel)="deleteFile(upload, 'basic-dragdrop')">
          </goab-file-upload-card>
        </goab-form-item>

        <goab-form-item label="Upload Images">
          <goab-file-upload-input
            variant="dragdrop"
            maxFileSize="5MB"
            accept="image/*"
            (onSelectFile)="uploadFile($event, 'basic-images')">
          </goab-file-upload-input>
          <goab-file-upload-card
            *ngFor="let upload of basicUploads.images"
            [type]="upload.file.type"
            [size]="upload.file.size"
            [filename]="upload.file.name"
            [progress]="progressList[upload.file.name]"
            [error]="errorList[upload.file.name]"
            (onDelete)="deleteFile(upload, 'basic-images')"
            (onCancel)="deleteFile(upload, 'basic-images')">
          </goab-file-upload-card>
        </goab-form-item>
      </goab-block>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Button Variant</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Upload File (Button Style)">
          <goab-file-upload-input
            variant="button"
            maxFileSize="20MB"
            (onSelectFile)="uploadFile($event, 'basic-button')">
          </goab-file-upload-input>
          <goab-file-upload-card
            *ngFor="let upload of basicUploads.button"
            [type]="upload.file.type"
            [size]="upload.file.size"
            [filename]="upload.file.name"
            [progress]="progressList[upload.file.name]"
            [error]="errorList[upload.file.name]"
            (onDelete)="deleteFile(upload, 'basic-button')"
            (onCancel)="deleteFile(upload, 'basic-button')">
          </goab-file-upload-card>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Basic Upload State:</h4>
        <p><strong>Dragdrop Files:</strong> {{ basicUploads.dragdrop.length }}</p>
        <p><strong>Image Files:</strong> {{ basicUploads.images.length }}</p>
        <p><strong>Button Files:</strong> {{ basicUploads.button.length }}</p>
        <pre>{{ getBasicUploadSummary() | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Reactive Forms Examples</h2>
      <p>Using file uploaders with Angular reactive forms:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Document Upload Form</h3>
      <form [formGroup]="documentForm">
        <goab-block direction="column" gap="l">
          <goab-form-item label="Document Name">
            <input
              name="documentName"
              formControlName="documentName"
              placeholder="Enter document name"
              style="width: 20rem; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </goab-form-item>

          <goab-form-item 
            label="Upload Document" 
            [error]="getFieldError('document')"
            helpText="Upload PDF, DOC, or DOCX files only">
            <goab-file-upload-input
              variant="dragdrop"
              maxFileSize="25MB"
              accept=".pdf,.doc,.docx"
              (onSelectFile)="uploadReactiveFile($event, 'document')">
            </goab-file-upload-input>
            <goab-file-upload-card
              *ngFor="let upload of reactiveUploads.document"
              [type]="upload.file.type"
              [size]="upload.file.size"
              [filename]="upload.file.name"
              [progress]="progressList[upload.file.name]"
              [error]="errorList[upload.file.name]"
              (onDelete)="deleteReactiveFile(upload, 'document')"
              (onCancel)="deleteReactiveFile(upload, 'document')">
            </goab-file-upload-card>
          </goab-form-item>

          <goab-form-item 
            label="Upload Supporting Images (Optional)"
            helpText="Upload images to support your document">
            <goab-file-upload-input
              variant="button"
              maxFileSize="10MB"
              accept="image/jpeg,image/png,image/gif"
              (onSelectFile)="uploadReactiveFile($event, 'images')">
            </goab-file-upload-input>
            <goab-file-upload-card
              *ngFor="let upload of reactiveUploads.images"
              [type]="upload.file.type"
              [size]="upload.file.size"
              [filename]="upload.file.name"
              [progress]="progressList[upload.file.name]"
              [error]="errorList[upload.file.name]"
              (onDelete)="deleteReactiveFile(upload, 'images')"
              (onCancel)="deleteReactiveFile(upload, 'images')">
            </goab-file-upload-card>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onDocumentFormSubmit()"
            [disabled]="documentForm.invalid || reactiveUploads.document.length === 0">
            Submit Document
          </goab-button>
          <goab-button type="secondary" (onClick)="resetDocumentForm()">
            Reset Form
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Document Form Values:</h4>
          <p><strong>Document Name:</strong> {{ documentForm.get('documentName')?.value }}</p>
          <p><strong>Documents Uploaded:</strong> {{ reactiveUploads.document.length }}</p>
          <p><strong>Images Uploaded:</strong> {{ reactiveUploads.images.length }}</p>
          <p><strong>Form Valid:</strong> {{ documentForm.valid && reactiveUploads.document.length > 0 }}</p>
          <pre>{{ documentForm.value | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Template-Driven Forms Examples</h2>
      <p>Using file uploaders with Angular template-driven forms:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Profile Upload Form</h3>
      <form #profileForm="ngForm">
        <goab-block direction="column" gap="l">
          <goab-form-item label="Full Name">
            <input
              name="fullName"
              [(ngModel)]="templateData.fullName"
              placeholder="Enter your full name"
              required
              style="width: 20rem; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </goab-form-item>

          <goab-form-item label="Profile Picture">
            <goab-file-upload-input
              variant="dragdrop"
              maxFileSize="5MB"
              accept="image/jpeg,image/png"
              (onSelectFile)="uploadTemplateFile($event, 'profilePicture')">
            </goab-file-upload-input>
            <goab-file-upload-card
              *ngFor="let upload of templateUploads.profilePicture"
              [type]="upload.file.type"
              [size]="upload.file.size"
              [filename]="upload.file.name"
              [progress]="progressList[upload.file.name]"
              [error]="errorList[upload.file.name]"
              (onDelete)="deleteTemplateFile(upload, 'profilePicture')"
              (onCancel)="deleteTemplateFile(upload, 'profilePicture')">
            </goab-file-upload-card>
          </goab-form-item>

          <goab-form-item label="Resume/CV">
            <goab-file-upload-input
              variant="button"
              maxFileSize="10MB"
              accept=".pdf,.doc,.docx"
              (onSelectFile)="uploadTemplateFile($event, 'resume')">
            </goab-file-upload-input>
            <goab-file-upload-card
              *ngFor="let upload of templateUploads.resume"
              [type]="upload.file.type"
              [size]="upload.file.size"
              [filename]="upload.file.name"
              [progress]="progressList[upload.file.name]"
              [error]="errorList[upload.file.name]"
              (onDelete)="deleteTemplateFile(upload, 'resume')"
              (onCancel)="deleteTemplateFile(upload, 'resume')">
            </goab-file-upload-card>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onTemplateFormSubmit()"
            [disabled]="!profileForm.valid || !hasRequiredFiles()">
            Save Profile
          </goab-button>
          <goab-button type="secondary" (onClick)="resetTemplateForm()">
            Reset
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Profile Form Data:</h4>
          <p><strong>Full Name:</strong> {{ templateData.fullName }}</p>
          <p><strong>Profile Picture:</strong> {{ templateUploads.profilePicture.length ? 'Uploaded' : 'Not uploaded' }}</p>
          <p><strong>Resume:</strong> {{ templateUploads.resume.length ? 'Uploaded' : 'Not uploaded' }}</p>
          <p><strong>Form Valid:</strong> {{ profileForm.valid && hasRequiredFiles() }}</p>
          <pre>{{ templateData | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Multiple File Upload Examples</h2>
      <p>Upload multiple files with different restrictions:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Project Files Upload</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Source Code Files">
          <goab-file-upload-input
            variant="dragdrop"
            maxFileSize="50MB"
            accept=".js,.ts,.html,.css,.scss,.json"
            (onSelectFile)="uploadMultipleFile($event, 'sourceCode')">
          </goab-file-upload-input>
          <goab-file-upload-card
            *ngFor="let upload of multipleUploads.sourceCode"
            [type]="upload.file.type"
            [size]="upload.file.size"
            [filename]="upload.file.name"
            [progress]="progressList[upload.file.name]"
            [error]="errorList[upload.file.name]"
            (onDelete)="deleteMultipleFile(upload, 'sourceCode')"
            (onCancel)="deleteMultipleFile(upload, 'sourceCode')">
          </goab-file-upload-card>
        </goab-form-item>

        <goab-form-item label="Documentation Files">
          <goab-file-upload-input
            variant="button"
            maxFileSize="25MB"
            accept=".md,.txt,.pdf"
            (onSelectFile)="uploadMultipleFile($event, 'documentation')">
          </goab-file-upload-input>
          <goab-file-upload-card
            *ngFor="let upload of multipleUploads.documentation"
            [type]="upload.file.type"
            [size]="upload.file.size"
            [filename]="upload.file.name"
            [progress]="progressList[upload.file.name]"
            [error]="errorList[upload.file.name]"
            (onDelete)="deleteMultipleFile(upload, 'documentation')"
            (onCancel)="deleteMultipleFile(upload, 'documentation')">
          </goab-file-upload-card>
        </goab-form-item>

        <goab-form-item label="Assets (Images, Videos)">
          <goab-file-upload-input
            variant="dragdrop"
            maxFileSize="100MB"
            accept="image/*,video/*"
            (onSelectFile)="uploadMultipleFile($event, 'assets')">
          </goab-file-upload-input>
          <goab-file-upload-card
            *ngFor="let upload of multipleUploads.assets"
            [type]="upload.file.type"
            [size]="upload.file.size"
            [filename]="upload.file.name"
            [progress]="progressList[upload.file.name]"
            [error]="errorList[upload.file.name]"
            (onDelete)="deleteMultipleFile(upload, 'assets')"
            (onCancel)="deleteMultipleFile(upload, 'assets')">
          </goab-file-upload-card>
        </goab-form-item>
      </goab-block>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="uploadAllFiles()">
          Upload All Files
        </goab-button>
        <goab-button type="secondary" (onClick)="clearAllFiles()">
          Clear All Files
        </goab-button>
        <goab-button type="tertiary" (onClick)="simulateUploadErrors()">
          Simulate Errors
        </goab-button>
      </goab-button-group>

      <goab-card>
        <h4>Multiple Upload Summary:</h4>
        <p><strong>Source Code Files:</strong> {{ multipleUploads.sourceCode.length }}</p>
        <p><strong>Documentation Files:</strong> {{ multipleUploads.documentation.length }}</p>
        <p><strong>Asset Files:</strong> {{ multipleUploads.assets.length }}</p>
        <p><strong>Total Files:</strong> {{ getTotalFilesCount() }}</p>
        <p><strong>Total Size:</strong> {{ getTotalFileSize() }} MB</p>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>File Validation Examples</h2>
      <p>File uploaders with strict validation and error handling:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Strict Validation Upload</h3>
      <form [formGroup]="validationForm">
        <goab-block direction="column" gap="l">
          <goab-form-item 
            label="Government ID Document" 
            [error]="getValidationError('idDocument')"
            helpText="Upload a clear photo of your government-issued ID (max 5MB, JPEG/PNG only)">
            <goab-file-upload-input
              variant="dragdrop"
              maxFileSize="5MB"
              accept="image/jpeg,image/png"
              (onSelectFile)="uploadValidationFile($event, 'idDocument')">
            </goab-file-upload-input>
            <goab-file-upload-card
              *ngFor="let upload of validationUploads.idDocument"
              [type]="upload.file.type"
              [size]="upload.file.size"
              [filename]="upload.file.name"
              [progress]="progressList[upload.file.name]"
              [error]="errorList[upload.file.name]"
              (onDelete)="deleteValidationFile(upload, 'idDocument')"
              (onCancel)="deleteValidationFile(upload, 'idDocument')">
            </goab-file-upload-card>
          </goab-form-item>

          <goab-form-item 
            label="Proof of Address" 
            [error]="getValidationError('proofOfAddress')"
            helpText="Upload a recent utility bill or bank statement (PDF only, max 10MB)">
            <goab-file-upload-input
              variant="button"
              maxFileSize="10MB"
              accept=".pdf"
              (onSelectFile)="uploadValidationFile($event, 'proofOfAddress')">
            </goab-file-upload-input>
            <goab-file-upload-card
              *ngFor="let upload of validationUploads.proofOfAddress"
              [type]="upload.file.type"
              [size]="upload.file.size"
              [filename]="upload.file.name"
              [progress]="progressList[upload.file.name]"
              [error]="errorList[upload.file.name]"
              (onDelete)="deleteValidationFile(upload, 'proofOfAddress')"
              (onCancel)="deleteValidationFile(upload, 'proofOfAddress')">
            </goab-file-upload-card>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onValidationFormSubmit()"
            [disabled]="!isValidationFormComplete()">
            Submit Application
          </goab-button>
          <goab-button type="secondary" (onClick)="resetValidationForm()">
            Reset
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Validation Status:</h4>
          <p><strong>ID Document:</strong> {{ validationUploads.idDocument.length > 0 ? 'Uploaded ✓' : 'Required' }}</p>
          <p><strong>Proof of Address:</strong> {{ validationUploads.proofOfAddress.length > 0 ? 'Uploaded ✓' : 'Required' }}</p>
          <p><strong>Form Complete:</strong> {{ isValidationFormComplete() }}</p>
          <pre>{{ validationForm.value | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Advanced Examples</h2>
      <p>Complex file upload scenarios and patterns:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Batch File Processing</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Upload Spreadsheets for Processing">
          <goab-file-upload-input
            variant="dragdrop"
            maxFileSize="50MB"
            accept=".xlsx,.csv,.xls"
            (onSelectFile)="uploadBatchFile($event)">
          </goab-file-upload-input>
          <goab-file-upload-card
            *ngFor="let upload of batchUploads"
            [type]="upload.file.type"
            [size]="upload.file.size"
            [filename]="upload.file.name"
            [progress]="progressList[upload.file.name]"
            [error]="errorList[upload.file.name]"
            (onDelete)="deleteBatchFile(upload)"
            (onCancel)="deleteBatchFile(upload)">
          </goab-file-upload-card>
        </goab-form-item>
      </goab-block>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button 
          type="primary" 
          (onClick)="processBatchFiles()"
          [disabled]="batchUploads.length === 0">
          Process Files ({{ batchUploads.length }})
        </goab-button>
        <goab-button type="secondary" (onClick)="clearBatchFiles()">
          Clear All
        </goab-button>
        <goab-button type="tertiary" (onClick)="downloadSampleFile()">
          Download Sample File
        </goab-button>
      </goab-button-group>

      <goab-card>
        <h4>Batch Processing State:</h4>
        <p><strong>Files Ready:</strong> {{ batchUploads.length }}</p>
        <p><strong>Processing Status:</strong> {{ processingStatus }}</p>
        <p><strong>Last Processed:</strong> {{ lastProcessedTime | date:'medium' }}</p>
      </goab-card>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Interactive Upload Controls</h3>
      <p>Test file upload behavior and state management:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="simulateSuccessfulUploads()">
          Simulate Success
        </goab-button>
        <goab-button type="secondary" (onClick)="simulateFailedUploads()">
          Simulate Failures
        </goab-button>
        <goab-button type="tertiary" (onClick)="simulateSlowUploads()">
          Simulate Slow Upload
        </goab-button>
        <goab-button type="tertiary" (onClick)="clearAllUploads()">
          Clear Everything
        </goab-button>
      </goab-button-group>

      <goab-form-item label="Test Upload Area">
        <goab-file-upload-input
          variant="dragdrop"
          maxFileSize="100MB"
          (onSelectFile)="uploadTestFile($event)">
        </goab-file-upload-input>
        <goab-file-upload-card
          *ngFor="let upload of testUploads"
          [type]="upload.file.type"
          [size]="upload.file.size"
          [filename]="upload.file.name"
          [progress]="progressList[upload.file.name]"
          [error]="errorList[upload.file.name]"
          (onDelete)="deleteTestFile(upload)"
          (onCancel)="deleteTestFile(upload)">
        </goab-file-upload-card>
      </goab-form-item>

      <goab-card>
        <h4>Test Upload Statistics:</h4>
        <p><strong>Total Uploads Today:</strong> {{ getTotalUploadsCount() }}</p>
        <p><strong>Successful Uploads:</strong> {{ getSuccessfulUploadsCount() }}</p>
        <p><strong>Failed Uploads:</strong> {{ getFailedUploadsCount() }}</p>
        <p><strong>Average Upload Time:</strong> {{ getAverageUploadTime() }}s</p>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Variants:</strong> Use <code>variant="dragdrop"</code> for drag-and-drop interface or <code>variant="button"</code> for button-style upload</li>
        <li><strong>File Types:</strong> Restrict file types using <code>accept</code> attribute (MIME types or file extensions)</li>
        <li><strong>File Size:</strong> Set maximum file size with <code>maxFileSize</code> (e.g., "5MB", "100KB")</li>
        <li><strong>Progress Tracking:</strong> Use <code>GoabFileUploadCard</code> with <code>[progress]</code> to show upload progress</li>
        <li><strong>Error Handling:</strong> Set <code>[error]</code> on upload card to display error messages</li>
        <li><strong>Event Handling:</strong> Listen to <code>(onSelectFile)</code>, <code>(onDelete)</code>, and <code>(onCancel)</code> events</li>
        <li><strong>Validation:</strong> Implement custom validation logic for file count, type, and size requirements</li>
        <li><strong>Multiple Files:</strong> Handle multiple file uploads using arrays and <code>*ngFor</code></li>
        <li><strong>Upload Logic:</strong> Implement custom upload logic using the provided uploader interface</li>
        <li><strong>Accessibility:</strong> Component includes proper ARIA attributes and keyboard navigation</li>
        <li><strong>Security:</strong> Always validate file types and sizes on both client and server side</li>
        <li><strong>User Experience:</strong> Provide clear feedback on upload progress, success, and errors</li>
      </ul>
    </goab-container>
  `,
})
export class FileUploaderExamplesComponent implements OnInit {
  // Form instances
  documentForm: FormGroup;
  validationForm: FormGroup;

  // Upload tracking
  basicUploads = {
    dragdrop: [] as Upload[],
    images: [] as Upload[],
    button: [] as Upload[]
  };

  reactiveUploads = {
    document: [] as Upload[],
    images: [] as Upload[]
  };

  templateUploads = {
    profilePicture: [] as Upload[],
    resume: [] as Upload[]
  };

  multipleUploads = {
    sourceCode: [] as Upload[],
    documentation: [] as Upload[],
    assets: [] as Upload[]
  };

  validationUploads = {
    idDocument: [] as Upload[],
    proofOfAddress: [] as Upload[]
  };

  batchUploads: Upload[] = [];
  testUploads: Upload[] = [];

  // Progress and error tracking
  progressList: Record<string, number> = {};
  errorList: Record<string, string> = {};

  // Template form data
  templateData = {
    fullName: ''
  };

  // Status tracking
  processingStatus = 'Idle';
  lastProcessedTime: Date | null = null;
  uploadStats = {
    total: 0,
    successful: 0,
    failed: 0,
    totalTime: 0
  };

  constructor(private fb: FormBuilder) {
    this.documentForm = this.fb.group({
      documentName: ['', Validators.required],
      document: [null, Validators.required]
    });

    this.validationForm = this.fb.group({
      idDocument: [null, Validators.required],
      proofOfAddress: [null, Validators.required]
    });
  }

  ngOnInit() {
    console.log('File Uploader Examples component initialized');
  }

  // Basic upload methods
  uploadFile(event: GoabFileUploadInputOnSelectFileDetail, category: string) {
    console.log(`Uploading file to ${category}:`, event);
    
    const file = event.file;
    const uploader = new MockUploader();
    const upload: Upload = { file, uploader };

    // Add to appropriate category
    switch (category) {
      case 'basic-dragdrop':
        this.basicUploads.dragdrop.push(upload);
        break;
      case 'basic-images':
        this.basicUploads.images.push(upload);
        break;
      case 'basic-button':
        this.basicUploads.button.push(upload);
        break;
    }

    this.setupUploader(upload);
  }

  deleteFile(upload: Upload, category: string) {
    upload.uploader.abort();
    delete this.progressList[upload.file.name];
    delete this.errorList[upload.file.name];

    switch (category) {
      case 'basic-dragdrop':
        this.basicUploads.dragdrop = this.basicUploads.dragdrop.filter(u => u.file.name !== upload.file.name);
        break;
      case 'basic-images':
        this.basicUploads.images = this.basicUploads.images.filter(u => u.file.name !== upload.file.name);
        break;
      case 'basic-button':
        this.basicUploads.button = this.basicUploads.button.filter(u => u.file.name !== upload.file.name);
        break;
    }
  }

  // Reactive form methods
  uploadReactiveFile(event: GoabFileUploadInputOnSelectFileDetail, category: string) {
    console.log(`Uploading reactive file to ${category}:`, event);
    
    const file = event.file;
    const uploader = new MockUploader();
    const upload: Upload = { file, uploader };

    if (category === 'document') {
      this.reactiveUploads.document.push(upload);
      this.documentForm.patchValue({ document: file.name });
    } else if (category === 'images') {
      this.reactiveUploads.images.push(upload);
    }

    this.setupUploader(upload);
  }

  deleteReactiveFile(upload: Upload, category: string) {
    upload.uploader.abort();
    delete this.progressList[upload.file.name];
    delete this.errorList[upload.file.name];

    if (category === 'document') {
      this.reactiveUploads.document = this.reactiveUploads.document.filter(u => u.file.name !== upload.file.name);
      if (this.reactiveUploads.document.length === 0) {
        this.documentForm.patchValue({ document: null });
      }
    } else if (category === 'images') {
      this.reactiveUploads.images = this.reactiveUploads.images.filter(u => u.file.name !== upload.file.name);
    }
  }

  onDocumentFormSubmit() {
    if (this.documentForm.valid && this.reactiveUploads.document.length > 0) {
      console.log('Document Form Submitted:', {
        form: this.documentForm.value,
        documents: this.reactiveUploads.document.map(u => u.file.name),
        images: this.reactiveUploads.images.map(u => u.file.name)
      });
    }
  }

  resetDocumentForm() {
    this.documentForm.reset();
    this.reactiveUploads.document.forEach(u => u.uploader.abort());
    this.reactiveUploads.images.forEach(u => u.uploader.abort());
    this.reactiveUploads.document = [];
    this.reactiveUploads.images = [];
    this.clearProgressAndErrors();
  }

  // Template form methods
  uploadTemplateFile(event: GoabFileUploadInputOnSelectFileDetail, category: string) {
    console.log(`Uploading template file to ${category}:`, event);
    
    const file = event.file;
    const uploader = new MockUploader();
    const upload: Upload = { file, uploader };

    if (category === 'profilePicture') {
      // Only allow one profile picture
      this.templateUploads.profilePicture.forEach(u => u.uploader.abort());
      this.templateUploads.profilePicture = [upload];
    } else if (category === 'resume') {
      // Only allow one resume
      this.templateUploads.resume.forEach(u => u.uploader.abort());
      this.templateUploads.resume = [upload];
    }

    this.setupUploader(upload);
  }

  deleteTemplateFile(upload: Upload, category: string) {
    upload.uploader.abort();
    delete this.progressList[upload.file.name];
    delete this.errorList[upload.file.name];

    if (category === 'profilePicture') {
      this.templateUploads.profilePicture = [];
    } else if (category === 'resume') {
      this.templateUploads.resume = [];
    }
  }

  onTemplateFormSubmit() {
    console.log('Template Form Submitted:', {
      templateData: this.templateData,
      files: {
        profilePicture: this.templateUploads.profilePicture.map(u => u.file.name),
        resume: this.templateUploads.resume.map(u => u.file.name)
      }
    });
  }

  resetTemplateForm() {
    this.templateData.fullName = '';
    this.templateUploads.profilePicture.forEach(u => u.uploader.abort());
    this.templateUploads.resume.forEach(u => u.uploader.abort());
    this.templateUploads.profilePicture = [];
    this.templateUploads.resume = [];
    this.clearProgressAndErrors();
  }

  hasRequiredFiles(): boolean {
    return this.templateUploads.profilePicture.length > 0 && this.templateUploads.resume.length > 0;
  }

  // Multiple upload methods
  uploadMultipleFile(event: GoabFileUploadInputOnSelectFileDetail, category: string) {
    console.log(`Uploading multiple file to ${category}:`, event);
    
    const file = event.file;
    const uploader = new MockUploader();
    const upload: Upload = { file, uploader };

    switch (category) {
      case 'sourceCode':
        this.multipleUploads.sourceCode.push(upload);
        break;
      case 'documentation':
        this.multipleUploads.documentation.push(upload);
        break;
      case 'assets':
        this.multipleUploads.assets.push(upload);
        break;
    }

    this.setupUploader(upload);
  }

  deleteMultipleFile(upload: Upload, category: string) {
    upload.uploader.abort();
    delete this.progressList[upload.file.name];
    delete this.errorList[upload.file.name];

    switch (category) {
      case 'sourceCode':
        this.multipleUploads.sourceCode = this.multipleUploads.sourceCode.filter(u => u.file.name !== upload.file.name);
        break;
      case 'documentation':
        this.multipleUploads.documentation = this.multipleUploads.documentation.filter(u => u.file.name !== upload.file.name);
        break;
      case 'assets':
        this.multipleUploads.assets = this.multipleUploads.assets.filter(u => u.file.name !== upload.file.name);
        break;
    }
  }

  uploadAllFiles() {
    console.log('Starting batch upload of all files');
    // Simulate batch upload process
  }

  clearAllFiles() {
    Object.values(this.multipleUploads).forEach(uploads => {
      uploads.forEach(u => u.uploader.abort());
    });
    this.multipleUploads.sourceCode = [];
    this.multipleUploads.documentation = [];
    this.multipleUploads.assets = [];
    this.clearProgressAndErrors();
  }

  simulateUploadErrors() {
    Object.values(this.multipleUploads).forEach(uploads => {
      uploads.forEach(upload => {
        this.errorList[upload.file.name] = 'Simulated upload error';
      });
    });
  }

  getTotalFilesCount(): number {
    return this.multipleUploads.sourceCode.length + 
           this.multipleUploads.documentation.length + 
           this.multipleUploads.assets.length;
  }

  getTotalFileSize(): string {
    const totalBytes = Object.values(this.multipleUploads)
      .flat()
      .reduce((total, upload) => total + upload.file.size, 0);
    return (totalBytes / (1024 * 1024)).toFixed(2);
  }

  // Validation upload methods
  uploadValidationFile(event: GoabFileUploadInputOnSelectFileDetail, category: string) {
    console.log(`Uploading validation file to ${category}:`, event);
    
    const file = event.file;
    const uploader = new MockUploader();
    const upload: Upload = { file, uploader };

    if (category === 'idDocument') {
      // Only allow one ID document
      this.validationUploads.idDocument.forEach(u => u.uploader.abort());
      this.validationUploads.idDocument = [upload];
      this.validationForm.patchValue({ idDocument: file.name });
    } else if (category === 'proofOfAddress') {
      // Only allow one proof of address
      this.validationUploads.proofOfAddress.forEach(u => u.uploader.abort());
      this.validationUploads.proofOfAddress = [upload];
      this.validationForm.patchValue({ proofOfAddress: file.name });
    }

    this.setupUploader(upload);
  }

  deleteValidationFile(upload: Upload, category: string) {
    upload.uploader.abort();
    delete this.progressList[upload.file.name];
    delete this.errorList[upload.file.name];

    if (category === 'idDocument') {
      this.validationUploads.idDocument = [];
      this.validationForm.patchValue({ idDocument: null });
    } else if (category === 'proofOfAddress') {
      this.validationUploads.proofOfAddress = [];
      this.validationForm.patchValue({ proofOfAddress: null });
    }
  }

  onValidationFormSubmit() {
    if (this.isValidationFormComplete()) {
      console.log('Validation Form Submitted:', {
        form: this.validationForm.value,
        files: {
          idDocument: this.validationUploads.idDocument.map(u => u.file.name),
          proofOfAddress: this.validationUploads.proofOfAddress.map(u => u.file.name)
        }
      });
    }
  }

  resetValidationForm() {
    this.validationForm.reset();
    this.validationUploads.idDocument.forEach(u => u.uploader.abort());
    this.validationUploads.proofOfAddress.forEach(u => u.uploader.abort());
    this.validationUploads.idDocument = [];
    this.validationUploads.proofOfAddress = [];
    this.clearProgressAndErrors();
  }

  isValidationFormComplete(): boolean {
    return this.validationForm.valid && 
           this.validationUploads.idDocument.length > 0 && 
           this.validationUploads.proofOfAddress.length > 0;
  }

  // Batch upload methods
  uploadBatchFile(event: GoabFileUploadInputOnSelectFileDetail) {
    console.log('Uploading batch file:', event);
    
    const file = event.file;
    const uploader = new MockUploader();
    const upload: Upload = { file, uploader };

    this.batchUploads.push(upload);
    this.setupUploader(upload);
  }

  deleteBatchFile(upload: Upload) {
    upload.uploader.abort();
    delete this.progressList[upload.file.name];
    delete this.errorList[upload.file.name];
    this.batchUploads = this.batchUploads.filter(u => u.file.name !== upload.file.name);
  }

  processBatchFiles() {
    if (this.batchUploads.length > 0) {
      this.processingStatus = 'Processing...';
      setTimeout(() => {
        this.processingStatus = 'Completed';
        this.lastProcessedTime = new Date();
      }, 3000);
    }
  }

  clearBatchFiles() {
    this.batchUploads.forEach(u => u.uploader.abort());
    this.batchUploads = [];
    this.processingStatus = 'Idle';
    this.clearProgressAndErrors();
  }

  downloadSampleFile() {
    // Simulate downloading a sample file
    console.log('Downloading sample spreadsheet file...');
  }

  // Test upload methods
  uploadTestFile(event: GoabFileUploadInputOnSelectFileDetail) {
    console.log('Uploading test file:', event);
    
    const file = event.file;
    const uploader = new MockUploader();
    const upload: Upload = { file, uploader };

    this.testUploads.push(upload);
    this.setupUploader(upload);
    this.uploadStats.total++;
  }

  deleteTestFile(upload: Upload) {
    upload.uploader.abort();
    delete this.progressList[upload.file.name];
    delete this.errorList[upload.file.name];
    this.testUploads = this.testUploads.filter(u => u.file.name !== upload.file.name);
  }

  // Interactive simulation methods
  simulateSuccessfulUploads() {
    Object.keys(this.progressList).forEach(fileName => {
      this.progressList[fileName] = 100;
      delete this.errorList[fileName];
    });
    this.uploadStats.successful += Object.keys(this.progressList).length;
  }

  simulateFailedUploads() {
    Object.keys(this.progressList).forEach(fileName => {
      this.errorList[fileName] = 'Upload failed: Network error';
      this.progressList[fileName] = 0;
    });
    this.uploadStats.failed += Object.keys(this.progressList).length;
  }

  simulateSlowUploads() {
    Object.keys(this.progressList).forEach(fileName => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 5; // Very slow progress
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
        }
        this.progressList[fileName] = progress;
      }, 1000);
    });
  }

  clearAllUploads() {
    // Clear all upload categories
    Object.values(this.basicUploads).forEach(uploads => uploads.forEach(u => u.uploader.abort()));
    Object.values(this.reactiveUploads).forEach(uploads => uploads.forEach(u => u.uploader.abort()));
    Object.values(this.templateUploads).forEach(uploads => uploads.forEach(u => u.uploader.abort()));
    Object.values(this.multipleUploads).forEach(uploads => uploads.forEach(u => u.uploader.abort()));
    Object.values(this.validationUploads).forEach(uploads => uploads.forEach(u => u.uploader.abort()));
    this.batchUploads.forEach(u => u.uploader.abort());
    this.testUploads.forEach(u => u.uploader.abort());

    // Reset all arrays
    this.basicUploads = { dragdrop: [], images: [], button: [] };
    this.reactiveUploads = { document: [], images: [] };
    this.templateUploads = { profilePicture: [], resume: [] };
    this.multipleUploads = { sourceCode: [], documentation: [], assets: [] };
    this.validationUploads = { idDocument: [], proofOfAddress: [] };
    this.batchUploads = [];
    this.testUploads = [];

    this.clearProgressAndErrors();
  }

  // Statistics methods
  getTotalUploadsCount(): number {
    return this.uploadStats.total;
  }

  getSuccessfulUploadsCount(): number {
    return this.uploadStats.successful;
  }

  getFailedUploadsCount(): number {
    return this.uploadStats.failed;
  }

  getAverageUploadTime(): string {
    if (this.uploadStats.total === 0) return '0';
    return (this.uploadStats.totalTime / this.uploadStats.total).toFixed(1);
  }

  // Utility methods
  private setupUploader(upload: Upload) {
    const startTime = Date.now();

    upload.uploader.onprogress = (percent: number) => {
      this.progressList[upload.file.name] = percent;
    };

    upload.uploader.onabort = () => {
      console.log('Upload aborted:', upload.file.name);
      delete this.progressList[upload.file.name];
      delete this.errorList[upload.file.name];
    };

    upload.uploader.onfail = (err: string) => {
      console.log('Upload failed:', upload.file.name, err);
      this.errorList[upload.file.name] = err;
      this.uploadStats.failed++;
    };

    upload.uploader.oncomplete = () => {
      console.log('Upload complete:', upload.file.name);
      this.progressList[upload.file.name] = 100;
      delete this.errorList[upload.file.name];
      this.uploadStats.successful++;
      this.uploadStats.totalTime += (Date.now() - startTime) / 1000;
    };

    // Start the upload
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target) return;
      const url = e.target.result;
      if (url) {
        upload.uploader.upload(url);
      }
    };
    reader.readAsDataURL(upload.file);
  }

  private clearProgressAndErrors() {
    this.progressList = {};
    this.errorList = {};
  }

  getBasicUploadSummary() {
    return {
      dragdrop: this.basicUploads.dragdrop.map(u => ({ name: u.file.name, size: u.file.size })),
      images: this.basicUploads.images.map(u => ({ name: u.file.name, size: u.file.size })),
      button: this.basicUploads.button.map(u => ({ name: u.file.name, size: u.file.size }))
    };
  }


  getFieldError(fieldName: string): string | undefined {
    const field = this.documentForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) {
        return 'This field is required';
      }
    }
    return undefined;
  }


  getValidationError(fieldName: string): string | undefined {
    const field = this.validationForm.get(fieldName);
    const hasFiles = fieldName === 'idDocument' ? 
      this.validationUploads.idDocument.length > 0 : 
      this.validationUploads.proofOfAddress.length > 0;

    if (field && field.invalid && field.touched && !hasFiles) {
      return 'Please upload the required file';
    }
    return undefined;
  }

}