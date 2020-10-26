import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
    imports:[
        MatButtonModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRippleModule,
        MatExpansionModule,
        MatMenuModule,
        MatDividerModule
        
            ],
    exports:[
        MatButtonModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRippleModule,
        MatExpansionModule,
        MatMenuModule,
        MatDividerModule
            ]
})
export class MaterialModule{}